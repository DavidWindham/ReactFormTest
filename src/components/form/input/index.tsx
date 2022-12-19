import { useRef } from "react"

const InputComponent = (props: propsInterface) => {
    let theRef = useRef(props.ref);

    return <>
        <label>{props.label}</label><input ref={theRef} placeholder="input"></input><button onClick={(() => {theRef.current.reset()})}>RefreshThis</button>
    </>
}

interface propsInterface {
    label: string
    ref: any
}

export default InputComponent