import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let ResultA = 1
    let ResultB = 1

    ResultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            ResultA = ResultA * i
        }
        return ResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        ResultB = ResultB * i
    }


    return <>
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>
            result for a: {ResultA}
        </div>
        <div>
            result for b: {ResultB}
        </div>
    </>
}


const UserSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UserSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Maxim', 'Lika', 'Sofa'])

    const newArray = useMemo(() => {
        return users.filter(u => u.indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Serafim']
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => addUser()}>add User</button>
        <Users users={newArray}/>

    </>
}





export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const newArray = useMemo(() => {
        return books.filter(b => b.indexOf('a') > -1)
    }, [books])

    /*const addBook = () => {
        const newBooks = [...books, 'TypeScript']
        setBooks(newBooks)
    }*/

   /* const memoizedAddBook = useMemo(() => {
        const newBooks = [...books, 'TypeScript']
        setBooks(newBooks)
    }, [books])*/

    const memoizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'TypeScript']
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <Books books={newArray} addBook={memoizedAddBook2}/>

    </>
}

const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log('books')
    return <div>
        <button onClick={() => props.addBook()}>add Book</button>
        {
            props.books.map((books, i) => <div key={i}>{books}</div>)
        }</div>
}

const Books = React.memo(BooksSecret)