import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>


export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <> <input onChange={onChangeHandler}

    /> - {value} </>
}


export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={onClickHandler}>save
        </button> - actual value:
        {value} </>
}


export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>
