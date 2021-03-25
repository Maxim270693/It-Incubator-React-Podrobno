import React, {useEffect, useState} from "react";

type PropsType = {}

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

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const hoursString = get2digitsString(data.getSeconds())
    const minutesString = get2digitsString(data.getMinutes())
    const secondsString =get2digitsString(data.getHours())

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}