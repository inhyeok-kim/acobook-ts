import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import OutputIcon from '@mui/icons-material/Output';
import SaveIcon from '@mui/icons-material/Save';
import InputIcon from '@mui/icons-material/Input';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const actions = [
    { icon: <OutputIcon />, name: '지출' },
    { icon: <InputIcon />, name: '수입' },
    { icon: <AutorenewIcon />, name: '송금' },
  ];

export default function MainDial(){
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 'calc(10% + 20px)', right: 25 }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
            />
            ))}
        </SpeedDial>
    )
}