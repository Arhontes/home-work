import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import {log} from "util";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    console.log("rendering SuperRadio")
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }
    const mappedOptions: any[] = options
        ? options.map((o, i) => {
            return <label key={name + '-' + i}>
                <input key={i}
                       type={'radio'}
                       name={name}
                       value={o}
                       onChange={onChangeCallback}
                       checked={o === value}
                />
                {o}
            </label>
        })
        : []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
