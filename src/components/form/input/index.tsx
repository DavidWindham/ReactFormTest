import { useRef } from "react"

const InputComponent = (props: propsInterface) => {

    return <>
        <label>{props.label}</label><input ref={props.passedRef} placeholder="input"></input><button onClick={() => {props.passedRef.current.value=""}}>RESET</button>
    </>
}

interface propsInterface {
    label: string
    passedRef: any
}

export default InputComponent