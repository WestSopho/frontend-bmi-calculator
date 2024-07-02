import Image from 'next/image';

interface ItemlistProps{
    src: string, 
    title: string, 
    description: string
}

export default function ItemList({ src, title, description }: ItemlistProps) {
    return (
        <div className='flex flex-col sm:items-center lg:items-start gap-6 sm:flex-row lg:flex-col'>
            {/* Image */}
            <div className='flex-shrink-0'>
                <Image
                    src={src}
                    alt={title}
                    width={64}
                    height={64}
                />
            </div>

            {/* Title & Description */}
            <div className='flex flex-col gap-6'>
                <div className='text-heading-M text-gunmetal'>
                    {title}
                </div>
                <div className='text-body-M'>
                    {description}
                </div>
            </div>
        </div>
    );
}