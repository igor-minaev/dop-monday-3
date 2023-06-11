import React, {ChangeEvent} from 'react';

type SuperInputType = {
    setTitle: (title: string) => void
    value: string
}

export const SuperInput = (props: SuperInputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input value={props.value} onChange={onChangeHandler}/>
    );
};

