import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some items was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    title: 'Menu',
    collapsed: true,
    value: true,
    items: []
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbackProps,
    title: 'Users',
    collapsed: false,
    value: false,
    items: [
        {title: 'Maxim', value: 1},
        {title: 'Lika', value: 2},
        {title: 'Sofa', value: 3},
        {title: 'Vlad', value: 4},
    ]
}


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'}
                      collapsed={value}
                      onChange={() => {
                          setValue(!value)
                      }}
                      value={value}
                      items={[
                          {title: 'Maxim', value: 1},
                          {title: 'Lika', value: 2},
                          {title: 'Sofa', value: 3},
                          {title: 'Vlad', value: 4},
                      ]}
                      onClick={(value) => {alert('Hello')}}
    />
}