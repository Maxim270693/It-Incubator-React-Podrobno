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
                <AccordionTitle title={props.title}/>
                <button onClick={collapsedHandler}>Toggle</button>
                { !collapsed && <AccordionBody/>}
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