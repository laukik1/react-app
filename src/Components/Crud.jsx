import { Box, makeStyles, Typography } from '@material-ui/core';
import landingpg from '../Assests/Images/imgbanner.jpg';

const useStyle = makeStyles({
    image:{
        width: '100%',
        height: '100%'
    },
    componenet:{
        margin: 50
    }
})

const Crud = () =>{
    const classes = useStyle();
    return(
        <Box className={classes.componenet}>
            <Typography variant="h4" style={{marginBottom :50}}>Crud</Typography>
            <Box style={{display: 'flex'}}>
                <img className={classes.image} src={landingpg} /> 
            </Box>
        </Box>
        
    )
} 

export default Crud;