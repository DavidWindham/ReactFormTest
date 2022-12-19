import { useRef } from "react";
import InputComponent from "./input"


const Form = () => {
    const resetRefOne = useRef<any>("")
    const resetRefTwo = useRef<any>("")
    const resetRefThree = useRef<any>("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        resetRefOne.current.value = "TEST";
        resetRefTwo.current.value = "SECOND";
        resetRefThree.current.value = "THIRD";
    }
    return <form onSubmit={handleSubmit}>
        <InputComponent label="first" passedRef={resetRefOne}/>
        <InputComponent label="second" passedRef={resetRefTwo}/>
        <InputComponent label="third" passedRef={resetRefThree}/>
        <button type="submit"></button>
    </form>
}

export default Form