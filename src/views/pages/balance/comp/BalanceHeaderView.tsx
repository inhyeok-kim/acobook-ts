import { Button, Grid, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

interface propType {
    debt? : number
    asset? : number
}

export default function BalanceHeaderView({
    asset = 0,
    debt = 0
}:propType){

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{height :'100%'}}>
            <Grid item sx={{width :'100%', height:'95%'}}>
                <Grid container padding={'0px 16px'} alignItems={'center'} sx={{height:'100%'}}>
                    <Grid item xs={10}>
                        <Grid container alignItems={'center'}>
                            <Typography marginRight={'10px'} fontSize={'0.8rem'} fontWeight={'bold'} color={grey[700]}>부채</Typography>
                            <Typography fontWeight={'bold'} fontSize={'1.1rem'} color={'black'}>{debt.toLocaleString()}원</Typography>
                        </Grid>
                        <Grid container alignItems={'center'}>
                            <Typography marginRight={'10px'} fontSize={'0.8rem'}  fontWeight={'bold'} color={grey[700]}>자산</Typography>
                            <Typography fontWeight={'bold'} fontSize={'1.2rem'} color={blue[500]}>{asset.toLocaleString()}원</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="outlined">분석</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}