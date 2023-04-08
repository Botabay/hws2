import React, {useState} from 'react'
import Affair from './affair/Affair'
import {AffairType, AffairPriorityType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[] // need to fix any
    deleteAffairCallback: (_id:number)=>void
}
type FilterType = 'all' | AffairPriorityType
// pure helper functions
export   const filterAffairs = (affairs: AffairType[],
                        filter: FilterType): AffairType[] => { // need to fix any
    if (filter==='all') {
        return affairs;
    } else {
        return affairs.filter(el=>el.priority===filter) // need to fix 
    }   
}

function Affairs(props: AffairsPropsType) {
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(props.data, filter)
    
    const setAll = () => {
        // need to fix
        setFilter('all')
    }
    const setHigh = () => {
        // need to fix
        setFilter('high')
    }
    const setMiddle = () => {
        // need to fix
        setFilter('middle')
    }
    const setLow = () => {
        // need to fix
        setFilter('low')
    }

    const cnAll = s.button + ' ' + s.all + (filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (filter === 'low' ? ' ' + s.active : '')

    const mappedAffairs = filteredAffairs.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs

/**
 * import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[] // need to fix any
    setFilter: React.Dispatch<FilterType>
    deleteAffairCallback: (_id:number)=>void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    // const tempArray=props.data
    console.log(props);
    
    const setAll = () => {
        // need to fix
        console.log('setAll');
        props.setFilter('all')
    }
    const setHigh = () => {
        // need to fix
    }
    const setMiddle = () => {
        // need to fix
    }
    const setLow = () => {
        // need to fix
    }

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
                    id={'hw2-button-all'}
                    onClick={setAll}
                    className={cnAll}
                >
                    All
                </button>
                <button
                    id={'hw2-button-high'}
                    onClick={setHigh}
                    className={cnHigh}
                >
                    High
                </button>
                <button
                    id={'hw2-button-middle'}
                    onClick={setMiddle}
                    className={cnMiddle}
                >
                    Middle
                </button>
                <button
                    id={'hw2-button-low'}
                    onClick={setLow}
                    className={cnLow}
                >
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs

 */