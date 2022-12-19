import { useRef } from "react"

const InputComponent = (props: propsInterface) => {

    return <>
        <label>{props.label}</label><input ref={props.ref} placeholder="input"></input>
    </>
}

interface propsInterface {
    label: string
    ref: any
}

export default InputComponent