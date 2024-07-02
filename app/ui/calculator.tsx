
import clsx from 'clsx';
import TextField from "@/app/ui/text-field";
import RadioButton from "@/app/ui/radio-button";
import useTextInput from '@/app/lib/useTextInput';

import { useState } from 'react';
import { calculateMetricBMI, calculateImperialBMI } from '@/app/lib/utils'
import { setMessage } from '@/app/lib/utils';

export default function Calculator(){
    // Define metric state
    const [isMetric, setIsMetric] = useState(true);
    function handleMetricChange(){
        setIsMetric(!isMetric);
    }

    //Define text input states for metric system
    const [heightCm, setHeightCm] = useTextInput();
    const [weightKg, setWeightKg] = useTextInput();

    //Define text input states for imperial system
    const [heightFt, setHeightFt] = useTextInput();
    const [heightIn, setHeightIn] = useTextInput();
    const [weightSt, setWeightSt] = useTextInput();
    const [weightLbs, setWeightLbs] = useTextInput();

    let result = null;
    let message, intervalWeight;

    if (isMetric && heightCm !== '' && weightKg !== ''){
        const output = calculateMetricBMI(Number(heightCm), Number(weightKg)).toFixed(1);
        if (Number(output) > 0 && Number(output) < 40){
            result = output;
            [message, intervalWeight] = setMessage(result);
        }
    }

    if (!isMetric && heightFt !== '' && heightIn !== '' && weightSt !== '' && weightLbs !== ''){
        const output = calculateImperialBMI(Number(heightFt), Number(heightIn), Number(weightSt), Number(weightLbs)).toFixed(1);
        if (Number(output) > 0 && Number(output) < 40){
            result = output;
            [message, intervalWeight] = setMessage(result);
        }
    }

    return (
        <div className="p-10 space-y-7 shadow-xl rounded-lg bg-white">
            <p className="text-heading-M">Enter your details below</p>
            <div className="grid grid-rows-1 grid-cols-2">
                <RadioButton label="Metric" nameGroup="unit" isChecked={isMetric} onChange={handleMetricChange}/>
                <RadioButton label="Imperial" nameGroup="unit" isChecked={!isMetric} onChange={handleMetricChange}/>
            </div>

            <div className={clsx(
                `gap-2`,
                {
                    'grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2': isMetric, 
                    'flex flex-col': !isMetric
                }
            )}>
                {isMetric &&
                    <>
                        <div className='space-y-2'>
                            <p className="text-dark-electric-blue text-body-S">Height</p>
                            <TextField label="cm" value={heightCm} onChange={setHeightCm}/>    
                        </div>
                        <div className='space-y-2'>
                            <p className="text-dark-electric-blue text-body-S">Weight</p>
                            <TextField label="kg" value={weightKg} onChange={setWeightKg}/>
                        </div>
                    </>
                }
                {!isMetric &&
                    <>
                        <p className="text-dark-electric-blue text-body-S">Height</p>
                        <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                            <TextField label="ft" value={heightFt} onChange={setHeightFt}/>
                            <TextField label="in" value={heightIn} onChange={setHeightIn}/>
                        </div>
                        <p className="text-dark-electric-blue text-body-S">Weight</p>
                        <div className='grid grid-rows-1 grid-cols-2 gap-5'>
                            <TextField label="st" value={weightSt} onChange={setWeightSt}/>
                            <TextField label="lbs" value={weightLbs} onChange={setWeightLbs}/>   
                        </div>
                        
                    </>
                }
            </div>

            {
                result && 
                <div className='bg-blue text-white rounded-lg p-7 grid grid-rows-2 grid-cols-1 gap-4 sm:grid-rows-1 sm:grid-cols-2 sm:rounded-r-full'>
                    <div>
                        <p className='text-body-M-bold'>Your BMI is</p>
                        <p className='text-heading-L'>{result}</p>
                    </div>
                    <div className='self-center'>
                        {message} Your weight is <span className='text-body-M-bold'>{intervalWeight}</span>.
                    </div>
                </div>
            }

            {
                !result &&
                <div className='bg-blue text-white rounded-lg p-7 flex flex-col gap-5 sm:rounded-r-full'>
                    <p className='text-heading-M'>Welcome!</p>
                    <p className='text-body-S'>Enter your height and weight and you’ll see your BMI result here</p>
                </div>
            }

        </div>
    );
}