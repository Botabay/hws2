export type StateType = {
    themeId: number
}
export type ChangeThemeIdACType = ReturnType<typeof changeThemeId>
type ActionsType = ChangeThemeIdACType

const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':{
            return { ...state,themeId: action.id }
        } 
        default:
            return state
    }
}

export const changeThemeId = (id: number) => (
    { type: 'SET_THEME_ID', id }) as const// fix any
