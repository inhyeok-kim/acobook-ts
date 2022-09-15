import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, FormControl, Grid, ListItemAvatar, MenuItem, Select, SelectChangeEvent, Switch, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';

interface propType {
    closeHandler : Function
    onRegist : Function
}
export default function RegistView({
    closeHandler = ()=>{},
    onRegist = ()=>{}
}:propType){

    const [type,setType] = useState<TypeofBalance>('account');
    useEffect(()=>{
        reset()
    },[type]);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    function amountHandler(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.value){
            const val = parseInt(e.target.value.replaceAll(',',''))
            if(!isNaN(val)){
                setAmount(val);
            }
        } else {
            setAmount(0);
        }
    }
    const [limit, setLimit] = useState(0);
    function limitHandler(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.value){
            const val = parseInt(e.target.value.replaceAll(',',''))
            if(!isNaN(val)){
                setLimit(val);
            }
        } else {
            setLimit(0);
        }
    }
    
    const [autoClearing, setAutoClearing] = useState(false);
    const [clearingDate, setClearingDate] = useState(new Date().getDate().toString());
    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as TypeofBalance);
    };
    const handleClearingDate = (event: SelectChangeEvent) => {
        setClearingDate(event.target.value);
    };
    
    function reset(){
        setAmount(0);
        setLimit(0);
        setAutoClearing(false)
        setClearingDate(new Date().getDate().toString());
    }
    function regist(){
        const newBalance : BalanceType = {
            amount : amount,
            name : name,
            type : type,
            limit : limit,
            clearingDate : clearingDate,
            autoClearing : autoClearing,
        }
        onRegist(newBalance);
    }

    return (
        <>
            <AppBar 
                sx={{ 
                    position: 'relative',
                    boxShadow : '0px 0px 4px -1px rgb(0 0 0 / 20%), 0px 0px 4px 0px rgb(0 0 0 / 14%), 0px 0px 5px 0px rgb(0 0 0 / 12%)'
                }} 
                color={'transparent'}>
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <IconButton
                        sx={{flex:'1'}}
                        edge="start"
                        color="inherit"
                        onClick={()=>{closeHandler()}}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <FormControl sx={{ m: 1, minWidth: 120, flex:'4' }}>
                        <Select
                            value={type}
                            onChange={handleChange}
                            displayEmpty
                            variant='standard'
                            sx={{
                                textAlign:'center', 
                                '&:before':{borderBottom:'none'}, 
                                '& >div':{paddingRight:'0 !important'},
                                '& .MuiSelect-icon':{ bottom:'-0.5em',top:'unset',right:'calc(50% - 0.5em)'}
                            }}
                        >
                            <MenuItem value={'account'}>계좌</MenuItem>
                            <MenuItem value={'card'}>신용카드</MenuItem>
                            <MenuItem value={'asset'}>자산</MenuItem>
                            <MenuItem value={'debt'}>부채</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton
                        sx={{flex:'1'}}
                        edge="end"
                        color="inherit"
                        onClick={()=>{regist()}}
                        aria-label="close"
                    >
                        <SaveAsOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <TextField label="이름" variant='outlined' fullWidth size='small' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </ListItem>
                <Divider />
                <ListItem dense sx={{color:'rgba(0, 0, 0, 0.6)',alignItems:'end'}}>
                    <TextField label="잔액" variant='standard' sx={{'& input':{textAlign:'right'},paddingRight:'10px'}} 
                        fullWidth size='small' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                        value={amount.toLocaleString()}
                        onChange={amountHandler}
                    />원
                </ListItem>
                {
                    type === 'card' ?
                        <>
                            <ListItem dense sx={{color:'rgba(0, 0, 0, 0.6)',alignItems:'end'}}>
                                <TextField label="한도" variant='standard' sx={{'& input':{textAlign:'right'},paddingRight:'10px'}} 
                                    fullWidth size='small' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                                    value={limit.toLocaleString()}
                                    onChange={limitHandler}
                                />원
                            </ListItem>
                            <ListItem dense>
                                <Grid container justifyContent={'end'} alignItems={'center'} sx={{color:'rgba(0, 0, 0, 0.6)'}}>
                                    자동청산
                                    <Switch checked={autoClearing} onChange={(e)=>{setAutoClearing(e.target.checked)}}/>
                                </Grid>
                            </ListItem>
                            <Divider />
                            {
                                autoClearing ?
                                    <>
                                        <ListItem dense>
                                            <TextField label="연결계좌" variant='standard' sx={{'& input':{textAlign:'right'}}} 
                                                fullWidth size='small'
                                            />
                                        </ListItem>
                                        <ListItem dense>
                                            <Grid container justifyContent={'space-between'} alignItems={'center'} sx={{color:'rgba(0, 0, 0, 0.6)'}}>
                                                청산일
                                                <Grid item xs={5}>
                                                    <Grid container sx={{height:'100%',alignItems:'end'}}>
                                                        <FormControl sx={{minWidth:'89%'}}>
                                                            <Select
                                                                value={clearingDate}
                                                                onChange={handleClearingDate}
                                                                displayEmpty
                                                                variant='standard'
                                                                MenuProps={MenuProps}
                                                                sx={{
                                                                    textAlign:'center'
                                                                }}
                                                            >
                                                                {
                                                                    dateMenuItem()
                                                                }
                                                            </Select>
                                                        </FormControl>
                                                        일 
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </>
                                :
                                    ''
                            }
                        </>
                    :
                        ''
                }
            </List>
        </>
    )
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function dateMenuItem(){
    const arr :any[] = [];
    for(let i=1;i<=31;i++){
        arr.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
    }
    return arr;
}