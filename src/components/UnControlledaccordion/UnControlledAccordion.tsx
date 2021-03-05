import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('accordion rendering')

    const[collapsed,setCollapsed] = useState(false)
    const collapsedHandler = () => {setCollapsed(!collapsed)}

        return(
            <div>
                <AccordionTitle title={props.title} onClick={ () => {setCollapsed(!collapsed)} } />
                { !collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return(
        <>
            <h2 onClick={ () => {props.onClick()} }>{props.title}</h2>
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