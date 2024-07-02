import { useState } from 'react';

export default function useTextInput(){
    const [value, setValue] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setValue(e.target.value);
    }

    return [value, handleChange]
}