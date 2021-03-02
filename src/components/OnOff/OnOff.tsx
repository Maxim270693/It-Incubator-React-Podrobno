import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffPropsType = {}


export function OnOff(props: OnOffPropsType) {

    let [state,setState] = useState(false)

    const onStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        backgroundColor: state ? 'green' : 'white'
    }
    const offStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        backgroundColor: state ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid #000',
        borderRadius: '5px',
        display: 'inline-block',
        margin: '6px',
        backgroundColor: state ? 'green' : 'red'
    }

    const onHandler = () => {setState(true)}
    const offHandler = () => {setState(false)}


    return(
        <div className={s.blocks}>
            <span style={onStyle} onClick={ onHandler }>On</span>
            <span style={offStyle} onClick={ offHandler }>Off</span>
            <span style={indicatorStyle} ></span>
        </div>
    )
}