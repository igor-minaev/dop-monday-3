import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    callBack: () => void
    color?: string
    disabled?: boolean
    children?: React.ReactNode
    size?: number
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {callBack, color, disabled, children, ...otherProps} = props

    // const finalClassName = `${s.button} ${s.disabled}`
    // const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default}`
    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default} 
    ${disabled ? s.disabled : ''}`

    return (
        <button className={finalClassName}>{children}</button>
    );
};


// const finalClassName = s.button
//     + (disabled
//         ? ' ' + s.disabled
//         : xType === 'red'
//             ? ' ' + s.red
//             : xType === 'secondary'
//                 ? ' ' + s.secondary : ' ' + s.default)
//     + (className ? ' ' + className : '')


//-------------------------------------------------------------
// export const SuperButton: React.FC<SuperButtonPropsType> = ({
//                                                                 callBack,
//                                                                 color,
//                                                                 children,
//                                                                 ...otherProps
//                                                             }) => {
//     return (
//         <button>{children}</button>
//     );
// };
