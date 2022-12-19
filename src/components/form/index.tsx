import { useRef } from "react";
import InputComponent from "./input"


const Form = () => {
    const resetRef = useRef(null)

    const handleSubmit = (event: any) => {
        event.preventDefault()
        event.target.reset()
    }
    return <form onSubmit={handleSubmit}>
        <InputComponent label="first" ref={resetRef}/>
        <InputComponent label="second" ref={resetRef}/>
        <InputComponent label="third" ref={resetRef}/>
        <button type="submit"></button>
    </form>
}

export default Form