import { useId } from 'react';

interface RadioButtonProps {
    label: string, 
    nameGroup: string, 
    isChecked: boolean, 
    onChange: any
}

export default function RadioButton({label, nameGroup, isChecked, onChange}: RadioButtonProps){
    const id = useId();
    return (
        <label className='flex items-center gap-4 w-fit text-body-M-bold' htmlFor={id}>
            <div className='relative'>
                {/* Inner Circle */}
                <input id={id} className="size-[31px] text-[#D8E2E7] peer hover:border-blue" type="radio" name={nameGroup} checked={isChecked} onChange={onChange}/>
                <div className='invisible absolute bg-blue rounded-full size-[15px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:visible'></div> 
            </div>
            {label}
        </label>
    );
}