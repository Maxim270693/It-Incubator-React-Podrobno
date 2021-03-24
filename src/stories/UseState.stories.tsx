import React, {useState} from "react";


export default {
    title: 'useState demo'
}

function generateData() {
    //difficult counting
    console.log("generateData")
    return 154235114112124
}

export const Example1 = () => {
    console.log('Example1')
    const [counter,setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={ () => {setCounter(changer)}}>+</button>
        {counter}
    </>

}
