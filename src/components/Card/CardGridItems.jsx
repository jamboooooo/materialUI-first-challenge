import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textOnCart: {
        color: "white",
        fontSize: theme.spacing(3),
        textTransform: "uppercase"
      }
  }));

function CardGridItems({cardMounth, cardName, cardYear}) {
    const classes = useStyles(); 
    
    return <>
        <Grid item md={9}>
            <span className={classes.textOnCart}>{cardName}</span>
        </Grid>
        <Grid container item md={3}>
            <Grid item>
                <span className={classes.textOnCart}>
                    {cardMounth}/
                </span>
            </Grid>
            <Grid item>
                <span className={classes.textOnCart}>
                    {cardYear}
                </span>
            </Grid>
        </Grid>
    </>
}

export default CardGridItems