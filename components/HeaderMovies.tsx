import { HEADER_LIST } from '../constant';
import { HeaderProps } from '../models';
import HeaderItem from './HeaderItem';
export default function Header() {
  return (
    <header className='flex flex-col justify-center h-auto items-center sm:flex-row py-5'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        {HEADER_LIST.map((item: HeaderProps) => (
          <HeaderItem
            title={item.title}
            Icon={item.icon}
            key={item.title}
            url={item.url}
          />
        ))}
      </div>
    </header>
  );
}
