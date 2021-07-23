import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardGridItems from "./CardGridItems";
import CardImages from "./CardImages";

const useStyles = makeStyles((theme) => ({
    mainGridBox: {
      padding: 40,
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(1),
      },
    },
    mainVisa: {
      boxSizing: "border-box",
      padding: 20,
      width: 350,
      height: 205,
      borderRadius: "4%",
      background:
        "linear-gradient(90deg, rgba(9,149,200,1) 0%, rgba(9,120,180,1) 100%)",
    },
    textOnCart: {
      color: "white",
      fontSize: theme.spacing(3),
      textTransform: "uppercase",
    },
  }));


function Card({cardYear, cardNumber, cardName, cardMounth}) {
    const classes = useStyles();

    return <Box className={classes.mainGridBox}>
        <Box className={classes.mainVisa}>
            <CardImages/>
            <Box>
                <span className={classes.textOnCart}>{cardNumber}</span>
            </Box>
            <Grid container>
                <CardGridItems cardMounth={cardMounth} cardName={cardName} cardYear={cardYear}/>
            </Grid>
        </Box>
    </Box>
}

export default Card;
