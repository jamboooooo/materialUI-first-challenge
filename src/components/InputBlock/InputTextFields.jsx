import { Box, TextField } from "@material-ui/core";

function InputTextFields({handleCardName, handleCardNumber}) {
    return <>
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
    </>
}

export default InputTextFields