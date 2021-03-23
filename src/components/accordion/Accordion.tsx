import React from "react";

/*type ItemsPropsType = {
    title: string
    value: number
}*/

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: (value: boolean) => void
    value: boolean
    //items: Array<ItemsPropsType>
    //onClick: (value: string) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('accordion rendering')
        return(
            <div>
                <AccordionTitle title={props.title}
                                onClick={props.onChange}
                                value={!props.collapsed}
                />
                { !props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return(
        <>
            <h2 onClick={ () => {props.onClick(props.value)} }>{props.title}</h2>
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