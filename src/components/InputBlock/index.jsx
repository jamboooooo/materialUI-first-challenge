import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputButton from "./InputButton";
import InputGridItems from "./InputGridItems";
import InputTextFields from "./InputTextFields";

const useStyles = makeStyles((theme) => ({
    mainGridBox: {
      padding: 40,
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(1),
      },
    }
  }));

function InputBlock({handleCardName, handleCardNumber, handleCardMounth, handleCardYear}) {
    const classes = useStyles(); 

    return <Box className={classes.mainGridBox}>
        <Typography variant="h5" gutterBottom>
            Payment Details
        </Typography>
        <InputTextFields 
            handleCardName={handleCardName} 
            handleCardNumber={handleCardNumber}
        />
        <Grid container spacing={4}>
            <InputGridItems 
                handleCardName={handleCardName}
                handleCardNumber={handleCardNumber}
            />
        </Grid>
        <Box>
            <InputButton/>
        </Box>
    </Box>
}

export default InputBlock