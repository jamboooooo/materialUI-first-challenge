import { Grid, TextField } from "@material-ui/core";

function InputGridItems({handleCardMounth, handleCardYear}) {
    return <>
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
    </>
}

export default InputGridItems