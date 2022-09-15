import { BottomNavigation, BottomNavigationAction, Box, makeStyles } from "@mui/material";
import { useEffect, useState } from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TodayIcon from '@mui/icons-material/Today';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

import Today from './pages/today';
import Category from './pages/category';
import Balance from './pages/balance';
import Statistics from './pages/statistics';

interface propType {
    setViewPage : Function
}

export default function Navigation({
    setViewPage
}:propType){
    const [value, setValue] = useState(0);

    useEffect(()=>{
        setViewPage(<Today />);
    },[]);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    setViewPage(views[newValue].jsx);
                }}
                sx={{
                    '& .Mui-selected': {
                        // color:'#1683ad'
                    }
                }}
            >
                {
                    views.map((view,i)=>(
                        <BottomNavigationAction key={i} label={view.label} icon={view.icon} />
                    ))
                }
            </BottomNavigation>
        </Box>
    );
}

const views = [
    {
        jsx : <Today />,
        icon : <TodayIcon />,
        label : '오늘'
    },
    {
        jsx : <Balance />,
        icon : <AccountBalanceIcon />,
        label : '잔액'
    },
    {
        jsx : <Category />,
        icon : <AccountTreeOutlinedIcon />,
        label : '항목'
    },
    {
        jsx : <Statistics />,
        icon : <BarChartIcon />,
        label : '통계'
    }
]