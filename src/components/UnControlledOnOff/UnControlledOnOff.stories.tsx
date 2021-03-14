import React from "react";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff
}

const callback = action("on or off clicked")

export const OnMode = () => <UnControlledOnOff default={true}  onChange={callback} on={true}/>
export const OffMode = () => <UnControlledOnOff default={false} onChange={callback} on={false}/>
