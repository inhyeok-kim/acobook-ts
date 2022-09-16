import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import ImageIcon from '@mui/icons-material/Image';
import { red } from "@mui/material/colors";

export default function HistoryListView(){
    return (
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
        >
            <ListItemButton onClick={()=>{}} divider>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'항목명이나송금명'} secondaryTypographyProps={{color:'grey'}} secondary={'09월 19'} />
                <ListItemText primary={(10000).toLocaleString()+'원'} primaryTypographyProps={{textAlign:'right'}} />
            </ListItemButton>
            <ListItemButton onClick={()=>{}} divider>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'항목명이나송금명'} secondaryTypographyProps={{color:'grey'}} secondary={'09월 19'} />
                <ListItemText primary={(10000).toLocaleString()+'원'} primaryTypographyProps={{textAlign:'right'}} />
            </ListItemButton>
            <ListItemButton onClick={()=>{}} divider>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'항목명이나송금명'} secondaryTypographyProps={{color:'grey'}} secondary={'09월 19'} />
                <ListItemText primary={(10000).toLocaleString()+'원'} primaryTypographyProps={{textAlign:'right'}} />
            </ListItemButton>
        </List>
    )
}