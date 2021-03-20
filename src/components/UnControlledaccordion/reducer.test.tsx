import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true',() => {
    const state: StateType = {
        collapsed: false
    }

    const newReducer = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newReducer.collapsed).toBe(true)
})

test('collapsed should be false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newReducer = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newReducer.collapsed).toBe(false)
})