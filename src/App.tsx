import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/rating/Rating";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';

function App() {
    console.log('app rendering')

    let[ratingValue,setRatingValue] = useState<RatingValueType>(0)
    let[accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false)
    let[switchOn,setsSwitchOn] = useState<boolean>(false)

    // function onChange(value: RatingValueType) {}
    function onChange(value: boolean) {}

  return (
    <div className="App">
        {/*<PageTitle title="This is App component"/>*/}
        {/*<PageTitle title="Users component"/>*/}
        {/*<UnControlledRating value={3}/>*/}
        {/*<UnControlledAccordion title="Menu" />*/}
        <Accordion title="Users "
                   collapsed={accordionCollapsed}
                   value={accordionCollapsed}
                   onChange={onChange}
        />
        <Rating onClick={setRatingValue} value={ratingValue}/>
        {/*<UnControlledRating onChange={onChange}/>*/}
        {/*<UnControlledRating />*/}
        {/*<UnControlledRating value={3}/>*/}
        {/*<UnControlledRating value={4}/>*/}
        {/*<UnControlledRating value={5}/>*/}
        {/*<OnOff on={switchOn} onChange={ (on) => {setsSwitchOn(on)} }/>*/}

        <UnControlledOnOff on={switchOn} onChange={setsSwitchOn}/> {switchOn.toString()}

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
