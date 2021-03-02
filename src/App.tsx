import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledaccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    console.log('app rendering')
  return (
    <div className="App">
        {/*<PageTitle title="This is App component"/>*/}
        {/*<PageTitle title="Users component"/>*/}
        {/*<UnControlledRating value={3}/>*/}
        <UnControlledAccordion title="Menu" />
        <UnControlledAccordion title="Users "/>
        {/*<UnControlledRating value={0}/>*/}
        {/*<UnControlledRating value={1}/>*/}
        <UnControlledRating />
        {/*<UnControlledRating value={3}/>*/}
        {/*<UnControlledRating value={4}/>*/}
        {/*<UnControlledRating value={5}/>*/}
        <OnOff/>
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
