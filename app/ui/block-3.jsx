import ItemList from '@/app/ui/item-list';

export default function Block3(){
    return (
      <div className='px-6 py-10 my-16 lg:px-20 lg:py-16 xl:px-26 bg-gradient-to-br from-white to-[#D6E6FE] flex flex-col gap-10 lg:flex-row'>
        <ItemList src='/icon-eating.svg' title='Healthy eating' description='Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'/>
        <ItemList src='/icon-exercise.svg' title='Regular exercise' description='Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'/>
        <ItemList src='/icon-sleep.svg' title='Adequate sleep' description='Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'/>
      </div>
    );
}