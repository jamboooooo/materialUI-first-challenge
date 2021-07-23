import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainImgVisa: {
      textAlign: "right",
      "& img": {
        width: 80,
      },
    },
    mainImgChip: {
      marginTop: 20,
      "& img": {
        width: 50,
      },
    }
  }));


function CardImages() {
    const classes = useStyles(); 

    return <>
        <Box className={classes.mainImgVisa}>
            <img
            src="https://intocode.github.io/payment-card-material-ui-build/static/media/visa.aca7fbdd.png"
            alt="visa"
            />
        </Box>
        <Box className={classes.mainImgChip}>
            <img
            src="https://intocode.github.io/payment-card-material-ui-build/static/media/chip.4b08b077.png"
            alt="chip"
            />
        </Box>
    </>
}

export default CardImages