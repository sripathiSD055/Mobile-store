import { Box, Card, Grid, Typography } from "@mui/material"
import { useState , useRef, useEffect } from "react"

const CountdownComponent = () => {
    const [timerDay , setTimerDay] = useState('00');
    const [timerHours , setTimerHours] = useState('00');
    const [timerMinute , setTimerMinute] = useState('00');
    const [timerSeconds , setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const TargetDate = new Date('Jul 14 , 2024 00:00:00').getTime();

        interval = setInterval(()=>{
            const currentDate = new Date().getTime();
            const timeDifferce = TargetDate - currentDate;
            
            const days = Math.floor(timeDifferce / (1000 * 60 * 60 * 24));
            const hours = Math.floor(timeDifferce % (1000 * 60 * 60 * 24)  / (1000 * 60 * 60));
            const minutes = Math.floor(timeDifferce % (1000 * 60 * 60 ) / (1000 * 60));
            const seconds = Math.floor(timeDifferce % (1000 * 60 )  / (1000));

            if(timeDifferce < 0){
                clearInterval(interval.current)
            }
            else{
                setTimerDay(days)
                setTimerHours(hours)
                setTimerMinute(minutes)
                setTimerSeconds(seconds)
            }

        } , 1000)
    }
   useEffect(()=>{
    startTimer();
    return()=>{
        clearInterval(interval.current)
    }
   })
    return (
        <>
            <Box mt={3}>
                <Grid container spacing={{xs:1 , md:3}} px={{sm:0,sm:1,md:3}}>
                    <Grid item xs={3}>
                        <Card sx={{py:{xs:1,sm:2} , backgroundColor:'transparent', borderRadius:'10px' , boxShadow:'none' , border:'1px solid #003049' , backgroundColor:'#e7ebee' }} >
                            <Typography textAlign='center' fontSize={{xs:18, sm:20, md:25}} fontWeight={500} fontFamily={'Poppins'}>{timerDay}</Typography>
                            <Typography textAlign='center' fontSize={14} textTransform={'capitalize'} fontFamily={'Poppins'}>Days</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{py:{xs:1,sm:2} , backgroundColor:'transparent' , borderRadius:'10px' , boxShadow:'none' , border:'1px solid #003049' , backgroundColor:'#e7ebee' }}  >
                            <Typography textAlign='center' fontSize={{xs:18, sm:20, md:25}} fontWeight={500}fontFamily={'Poppins'}>{timerHours}</Typography>
                            <Typography textAlign='center' fontSize={14} textTransform={'capitalize'} fontFamily={'Poppins'}>hrs</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{py:{xs:1,sm:2} , backgroundColor:'transparent' , borderRadius:'10px' , boxShadow:'none' , border:'1px solid #003049',  backgroundColor:'#e7ebee' }} >
                            <Typography textAlign='center' fontSize={{xs:18, sm:20, md:25}} fontWeight={500} fontFamily={'Poppins'}>{timerMinute}</Typography>
                            <Typography textAlign='center' fontSize={14} textTransform={'capitalize'} fontFamily={'Poppins'}>mins</Typography>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card sx={{py:{xs:1,sm:2} , backgroundColor:'transparent' , borderRadius:'10px' , boxShadow:'none' , border:'1px solid #003049' , backgroundColor:'#e7ebee' }} >
                            <Typography textAlign='center' fontSize={{xs:18, sm:20, md:25}} fontWeight={500} fontFamily={'Poppins'}>{timerSeconds}</Typography>
                            <Typography textAlign='center' fontSize={14} textTransform={'capitalize'} fontFamily={'Poppins'}>secs</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default CountdownComponent