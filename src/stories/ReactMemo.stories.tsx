import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

export const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UserSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Maxim', 'Lika', 'Sofa'])

    const addUser = () => {
        const newUser = [...users, 'Kiril ']
        setUsers(newUser)
    }

    const [img,setImg] = useState<Array<{src: string, height: string}>>([])

    const imgObj = {
        src: 'https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        height:'60px'
    }

    const addImage = () => {
        console.log('add image')
        const newImg = [...img, imgObj]
        setImg( newImg)
    }

    return <>
        <button onClick={addImage}>addImage</button>{
            img.map((i, index) =>
                <img key={index} src={i.src} height={i.height}/>)
        }
        <button onClick={addUser}>addUser</button>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>

    </>
}


