import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log('accordion rendering')
    if(props.collapsed === true) {
        return(
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else
    return(
        <div>
            <AccordionTitle title={props.title}/>
            {/*<AccordionBody/>*/}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return(
        <>
            <h2>{props.title}</h2>
        </>
    )
}
function AccordionBody() {
    console.log('AccordionBody rendering')
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}