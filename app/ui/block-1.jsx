import Calculator from '@/app/ui/calculator';
import Image from 'next/image';

export default function Block1(){
    return (
        <div className='relative'>
        {/* Background Pattern */}
        <div className='absolute z-0 w-full h-1/2 rounded-b-xl bg-gradient-to-br from-white to-[#D6E6FE] lg:w-3/4 lg:h-full'></div>

        {/* Information */}
        <div className='relative z-10 p-5 sm:px-16 sm:py-10 lg:px-20 xl:px-26 lg:py-16'>
          {/* Logo */}
          <div className='flex justify-center lg:justify-start'>
            <Image 
              src="logo.svg"
              alt="bmi-calculator-logo"
              width={60}
              height={60}
            /> 
          </div>

          <div className='flex flex-col justify-center items-center gap-16 lg:grid lg:grid-rows-1 lg:grid-cols-2'>
            <div className='text-center space-y-10 lg:text-start'>
              <p className='text-gunmetal text-heading-L sm:text-heading-XL'>Body Mass Index Calculator</p>
              <p className='text-dark-electric-blue text-body-M'>Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
            </div>
            <Calculator/>
          </div>
        </div>
      </div>
    )
}