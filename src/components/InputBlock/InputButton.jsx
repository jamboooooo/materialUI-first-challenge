import { Button } from "@material-ui/core";

function InputButton() {
    return <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 30 }}
    >
        <span>
        ОПЛАТИТЬ <b>400$</b>
        </span>
    </Button>
}

export default InputButton