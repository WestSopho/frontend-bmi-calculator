import Image from 'next/image';

interface ItemBoxProps{
    src: string,
    title: string,
    description: string
};

export default function ItemBox({src, title, description}: ItemBoxProps){
    return(
        <div className='p-5 rounded-lg space-y-3 max-w-[365px] bg-white drop-shadow-lg'>
            <div className='flex items-center gap-3'>
                {/* Image */}
                <div className='flex-shrink-0'>
                    <Image
                        src={src}
                        alt={title}
                        width={25}
                        height={25}
                    />
                </div>

                {/* Title */}
                <div className='text-heading-S text-gunmetal'>
                    {title}
                </div>
            </div>
            {/* Description */}
            <div className='text-body-M text-dark-electric-blue'>
                {description}
            </div>
        </div>
    );
}