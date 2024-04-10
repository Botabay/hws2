import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    const CustomSliderStyles = {
        width:'50%',
        minWidth:'150px',
        '& .MuiSlider-thumb': {
            // color:'#01CB22',
            background: 'radial-gradient(circle at center, black , white ,red);'
        },
        '& .MuiSlider-track': {
            color: "#00CC22"
        },
        '& .MuiSlider-rail': {
            color: "#8B8B8B"
        }
    };


    return (
        <Slider
            sx={ // стили для слайдера // пишет студент
                CustomSliderStyles
            }
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
