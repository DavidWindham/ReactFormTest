import { TextField } from "@mui/material";
import { useRef } from "react";


const FormMUI = () => {
    const resetRef = useRef(null)

    const handleSubmit = (event: any) => {
        event.preventDefault()
        event.target.reset()
    }
    return <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="first" variant="outlined" />
        <TextField id="outlined-basic" label="second" variant="outlined" />
        <TextField id="outlined-basic" label="third" variant="outlined" />
        <button type="submit"></button>
    </form>
}

export default FormMUI