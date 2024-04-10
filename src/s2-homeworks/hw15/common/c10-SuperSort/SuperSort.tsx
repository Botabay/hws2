import React from 'react'
import downIcon from '../../assets/img/downSortIcon.svg'
import upIcon from '../../assets/img/upSortIcon.svg'
// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'
const noneIcon = downIcon+upIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    console.log('pureCh',sort, down,up);
    
    return sort === down ? up : sort === up ? '' : down; //up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
        console.log(sort+' 1onchangeCallback')
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon
    console.log('sortGlobal '+ sort)
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={upIcon}
            />
            <img
                id={id + '-icon-' + sort}
                src={downIcon}
            />

            {/*icon*/} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
