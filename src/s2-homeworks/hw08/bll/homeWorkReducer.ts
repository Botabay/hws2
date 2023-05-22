import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const upSort = (a: UserType, b: UserType) => a.name < b.name ? -1 : 1;
            const downSort = (a: UserType, b: UserType) => a.name > b.name ? -1 : 1;
            if (action.payload === 'up') return [...state.sort(upSort)];
            else return [...state.sort(downSort)]// need to fix
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
