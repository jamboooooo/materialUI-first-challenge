import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    padding: 40,
  },
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
  },
  inputName: {
    marginTop: theme.spacing(2),
  },
  textOnCart: {
    color: "white",
    fontSize: theme.spacing(3),
    textTransform: "uppercase",
  },
}));

function App() {
  const classes = useStyles();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMounth, setCardMounth] = useState("");
  const [cardYear, setCardYear] = useState("");

  const handleCardName = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardMounth = (e) => {
    setCardMounth(e.target.value);
  };

  const handleCardYear = (e) => {
    setCardYear(e.target.value);
  };

  return (
    <div className={classes.div}>
      <Box display="flex" alignItems="center">
        <Container maxWidth="md">
          <Paper elevation={2} className={classes.mainPaper}>
            <Grid container>
              <Grid item xs={2} md={6}>
                <Box className={classes.mainGridBox}>
                  <Box className={classes.mainVisa}>
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
                    <Box className={classes.mainCardNumber}>
                      <span className={classes.textOnCart}>{cardNumber}</span>
                    </Box>
                    <Grid container>
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
                          <span className={classes.textOnCart}>{cardYear}</span>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} md={6}>
                <Box className={classes.mainGridBox}>
                  <Typography variant="h5" gutterBottom>
                    Payment Details
                  </Typography>
                  <Box>
                    <TextField
                      fullWidth
                      label="Имя на карте"
                      onChange={handleCardName}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      label="Номер карты"
                      onChange={handleCardNumber}
                    />
                  </Box>
                  <Grid container spacing={4}>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="ММ"
                        onChange={handleCardMounth}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label="ГГ"
                        onChange={handleCardYear}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        type="password"
                        inputProps={{ maxLength: 3 }}
                        maxLength={3}
                        label="CVV"
                      />
                    </Grid>
                  </Grid>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: 30 }}
                    >
                      <span>
                        ОПЛАТИТЬ <b>400$</b>
                      </span>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}

export default App;
