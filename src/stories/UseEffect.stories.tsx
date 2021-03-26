import React, {useEffect, useState} from "react"

export default {
    title: 'useEffect demo'
}

//  SideEffect: lesson 20, 6-min: 20-sec;

export const SimpleExample = () => {
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
export const SetTimeoutExample = () => {
    const [counter,setCounter] = useState(0)
    const [fake,setFake] = useState(0)

    console.log('SimpleExample1')

    /*useEffect( () => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        },1000)
    },[counter])
*/

    /*useEffect( () => {
        setInterval(() => {
            console.log('setInterval')
            setCounter(state => state + 1)
        },1000)
    },[])*/

    return(
        <>
            counter, {counter}
            <button onClick={ () => {setCounter(counter + 1)} }>+</button>
            fake, {fake}
            <button onClick={ () => {setFake(fake + 1)} }>+</button>
        </>
    )
}


export const TimeExample = () => {
    console.log('SimpleExample1')

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setTimeout(() => {
            console.log('setInterval')
            let hours = new Date()
            setTime(hours)
        },1000)
    },[new Date()])


    return(
        <>
            time:  {time.toLocaleTimeString()}
        </>
    )
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('RESET EFFECT')
        }
    },[counter])

    const increase = () => {setCounter(counter + 1)}


    return(
        <>
           Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key )
        }

        window.addEventListener( 'keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    },[])




    return(
        <>
           Typed text: {text}
        </>
    )
}