

interface TextFieldProps{
    label: string,
    value: any, 
    onChange: any
}

export default function TextField({label, value, onChange}: TextFieldProps){
    return(
        <div className="py-0.5 px-3 border border-[#D8E2E7] rounded-lg flex items-center has-[:focus]:border-blue">
            <div className="grow">
                <input className="w-full border-none focus:ring-0 py-3 px-1 text-heading-M" placeholder="0" value={value ? value: ''} onChange={onChange}/>
            </div>
            <label className="text-heading-M text-blue">{label}</label>
        </div>
    );
}