import ItemBox from '@/app/ui/item-box';
import Image from 'next/image'

export default function Block4(){
    return (
        <div>
            {/* Grid For Mobile and Tablet Devices */}
            <div className="px-6 py-10 space-y-10 lg:px-20 lg:py-16 xl:px-26 lg:hidden">
                {/* Title */}
                <div className='text-center space-y-7'>
                    <p className='text-gunmetal text-heading-M'>Limitations of BMI</p>
                    <p className='text-body-M text-dark-electric-blue'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                </div>
                {/* Grid */}
                <div className='grid justify-items-center grid-rows-5 grid-cols-1 gap-x-5 gap-y-10 sm:grid-rows-3 sm:grid-cols-2'>
                    <ItemBox src='/icon-gender.svg' title='Gender' description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."/>
                    <ItemBox src='/icon-age.svg' title='Age' description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.."/>
                    <ItemBox src='/icon-muscle.svg' title='Muscle' description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."/>
                    <ItemBox src='/icon-pregnancy.svg' title='Pregnancy' description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."/>
                    <div class="sm:row-span-3 sm:col-span-2">
                        <ItemBox src='/icon-race.svg' title='Race' description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."/>
                    </div>
                    
                </div>
                
            </div>
            {/* Grid for Desktop Devices */}
            <div className="hidden lg:block">
                <div className='p-20 space-y-7'>
                    <div className='flex'>
                        <div className='text-start space-y-7 relative w-1/2'>
                            <p className='text-gunmetal text-heading-L'>Limitations of BMI</p>
                            <p className='text-body-M text-dark-electric-blue'>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                            <Image 
                                src='/pattern-curved-line-right.svg'
                                width={94}
                                height={322}
                                alt='BMI Icon'
                                className='absolute left-1/4'
                            />
                        </div>

                        <div className='flex flex-col w-1/2 gap-10'>
                            {/* First Row */}
                            <div className='flex justify-center '>
                                <ItemBox src='/icon-gender.svg' title='Gender' description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."/>
                            </div>
                            {/* Second Row */}
                            <div className='-ms-[200px] flex justify-center gap-7'>
                                <ItemBox src='/icon-age.svg' title='Age' description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.."/>
                                <ItemBox src='/icon-muscle.svg' title='Muscle' description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."/>
                            </div>
                            {/* Third Row */}
                            <div className='-ms-[600px] flex justify-center gap-7'>
                                <ItemBox src='/icon-pregnancy.svg' title='Pregnancy' description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."/>
                                <ItemBox src='/icon-race.svg' title='Race' description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}