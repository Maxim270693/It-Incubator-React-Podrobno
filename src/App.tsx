import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    console.log('app rendering')
  return (
    <div className="App">
        <PageTitle title="This is App component"/>
        <PageTitle title="Users component"/>
        <Rating value={3}/>
        <Accordion title="Menu" collapsed={true}/>
        <Accordion title="Users " collapsed={false}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('title rendering')
    return(
        <h1>
            {props.title}
        </h1>
    )
}




export default App;
