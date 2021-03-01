import React from 'react';
import './App.css';

function App() {
    console.log('app rendering')
  return (
    <div className="App">
        <AppTitle/>
        <Rating/>
        <Accordion/>
        <Rating/>
    </div>
  );
}

function AppTitle() {
    console.log('title rendering')
    return(
        <>
            This is APP component
        </>
    )
}

function Rating() {
    console.log('rating rendering')
  return(
      <>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
      </>
  )
}

function Star() {
    console.log('star rendering')
    return(
        <div>
            <div>star</div>
        </div>
    )
}

function Accordion() {
    console.log('accordion rendering')
    return(
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return(
        <>
            <h3>Menu</h3>
        </>
    )
}
function AccordionBody() {
    console.log('AccordionBody rendering')
    return(
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

export default App;
