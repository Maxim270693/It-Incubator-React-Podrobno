import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnOff(props: OnOffPropsType) {


    const onStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid #000',
        borderRadius: '5px',
        display: 'inline-block',
        margin: '6px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onHandler = () => {props.onChange(true)}
    const offHandler = () => {props.onChange(false)}


    return(
        <div className={s.blocks}>
            <span style={onStyle} onClick={ onHandler }>On</span>
            <span style={offStyle} onClick={ offHandler }>Off</span>
            <span style={indicatorStyle} ></span>
        </div>
    )
}