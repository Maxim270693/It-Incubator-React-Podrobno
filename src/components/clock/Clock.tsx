import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode?: "analog" | "digital"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            console.log('TICK')
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(setIntervalId)
        }
    }, [])


    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={data}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={data}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}