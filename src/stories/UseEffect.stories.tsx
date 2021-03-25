import React, {useEffect, useState} from "react"

export default {
    title: 'useEffect demo'
}

//  SideEffect: lesson 20, 6-min: 20-sec;

export const SimpleExample1 = () => {
    const [counter,setCounter] = useState(0)
    const [fake,setFake] = useState(0)

    console.log('SimpleExample1')

    useEffect( () => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect( () => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    },[])
    useEffect( () => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    },[counter])

    return(
        <>
            counter, {counter}
            <button onClick={ () => {setCounter(counter + 1)} }>+</button>
            fake, {fake}
            <button onClick={ () => {setFake(fake + 1)} }>+</button>
        </>
    )
}