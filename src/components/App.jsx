import {
  Box,
  Container,
  Grid,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "./Card";
import InputBlock from "./InputBlock";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    padding: 40,
  }
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
                <Card
                  cardMounth={cardMounth} 
                  cardName={cardName} 
                  cardNumber={cardNumber} 
                  cardYear={cardYear}
                />
              </Grid>
              <Grid item xs={2} md={6}>
                <InputBlock 
                  handleCardMounth={handleCardMounth}
                  handleCardName={handleCardName}
                  handleCardNumber={handleCardNumber}
                  handleCardYear={handleCardYear}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}

export default App;
