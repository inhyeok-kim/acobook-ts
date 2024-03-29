import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import { grey, red } from "@mui/material/colors";
import DetailList from "src/views/overs/balance/DetailList";
import { useState } from "react";

interface propType{
    accountList? : Array<BalanceType>
    cardList? : Array<BalanceType>
    assetList? : Array<BalanceType>
    debtList? : Array<BalanceType>
    totalAccount : number
    totalCard : number
    totalAsset : number
    totalDebt : number
}

export default function BalanceListView({
    accountList=[],
    cardList=[],
    assetList=[],
    debtList=[],
    totalAccount=0,
    totalCard=0,
    totalAsset=0,
    totalDebt=0,
}:propType){

    const [detailOpen,setDetailOpen] = useState(false);
    const [detailId,setDetailId] = useState<number>();
    function balanceClick(id:number){
        setDetailId(id);
        setDetailOpen(true);
    }

    return (
        <>
            <List 
                dense={true}
                sx={{
                    width: '100%',
                    height : '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
                >
                    { accountList.length > 0 ?
                        <li key={`section-account`}>
                            <ul>
                                <ListSubheader sx={{background:grey[200],lineHeight:'36px',borderTop:'1px solid '+grey[300]}}>
                                    <Grid container justifyContent={"space-between"}>
                                        {`계좌`}
                                        <Grid item xs={9} textAlign={'right'}>
                                            {totalAccount.toLocaleString()}원
                                        </Grid>
                                    </Grid>
                                </ListSubheader>
                                {
                                    accountList.map((account,i)=>{
                                        return (
                                            <ListItemButton onClick={()=>{balanceClick(account.id!)}} key={account.id+''} divider={i<accountList.length-1}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={account.name} secondary={account.amount?.toLocaleString()+'원'} />
                                            </ListItemButton>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        :
                        ''
                    }
                    { cardList.length > 0 ?
                        <li key={`section-card`}>
                            <ul>
                                <ListSubheader sx={{background:grey[200],lineHeight:'36px',borderTop:'1px solid '+grey[300]}}>
                                    <Grid container justifyContent={"space-between"}>
                                        {`신용카드`}
                                        <Grid item xs={9} textAlign={'right'}>
                                            {totalCard.toLocaleString()}원
                                        </Grid>
                                    </Grid>
                                </ListSubheader>
                                {
                                    cardList.map((card,i)=>{
                                        return (
                                            <ListItemButton onClick={()=>{balanceClick(card.id!)}} key={card.id+''} divider={i<cardList.length-1}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={card.name} secondaryTypographyProps={{color:red[600]}} secondary={card.amount?.toLocaleString()+'원'} />
                                            </ListItemButton>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        :
                        ''
                    }
                    { assetList.length > 0 ?
                        <li key={`section-asset`}>
                            <ul>
                                <ListSubheader sx={{background:grey[200],lineHeight:'36px',borderTop:'1px solid '+grey[300]}}>
                                    <Grid container justifyContent={"space-between"}>
                                        {`자산`}
                                        <Grid item xs={9} textAlign={'right'}>
                                            {totalAsset.toLocaleString()}원
                                        </Grid>
                                    </Grid>    
                                </ListSubheader>
                                {
                                    assetList.map((asset,i)=>{
                                        return (
                                            <ListItemButton onClick={()=>{balanceClick(asset.id!)}} key={asset.id+''} divider={i<assetList.length-1}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={asset.name} secondary={asset.amount?.toLocaleString()+'원'} />
                                            </ListItemButton>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        :
                        ''
                    }
                    { debtList.length > 0 ?
                        <li key={`section-debt`}>
                            <ul>
                                <ListSubheader sx={{background:grey[200],lineHeight:'36px',borderTop:'1px solid '+grey[300]}}>
                                    <Grid container justifyContent={"space-between"}>
                                        {`부채`}
                                        <Grid item xs={9} textAlign={'right'}>
                                            {totalDebt.toLocaleString()}원
                                        </Grid>
                                    </Grid>
                                </ListSubheader>
                                {
                                    debtList.map((debt,i)=>{
                                        return (
                                            <ListItemButton onClick={()=>{balanceClick(debt.id!)}} key={debt.id+''} divider={i<debtList.length-1}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <ImageIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={debt.name} secondaryTypographyProps={{color:red[600]}} secondary={debt.amount?.toLocaleString()+'원'} />
                                            </ListItemButton>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        :
                        ''
                    }
            </List>
            <DetailList balanceId={detailId} isOpen={detailOpen} closeHandler={()=>{setDetailOpen(false)}} />
        </>
    )
}