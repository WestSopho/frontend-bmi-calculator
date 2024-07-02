import Image from 'next/image';

export default function Block2(){
    return (
        <div className='lg:px-20 xl:px-26 lg:py-16 flex flex-col justify-center items-center gap-10 sm:flex-row'>
            <div className='sm:w-1/2'>
                <Image 
                    src="/image-man-eating.webp"
                    alt="image man eating"
                    style={{
                    width: '100%', 
                    height: 'auto'
                    }}
                    width={564}
                    height={384}
                    className='max-w-[564px]'
                />
            </div>
            <div className='p-5 sm:w-1/2 space-y-7'>
                <p className='text-heading-M text-gunmetal sm:text-heading-L'>What your BMI result means</p>
                <p className='text-body-M text-dark-electric-blue'>A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
            </div>
      </div>
    );
}