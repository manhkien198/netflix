import Link from 'next/link';
import * as React from 'react';

export interface HeaderItemProps {
  Icon: React.ElementType;
  title: string;
  url: string;
}

export default function HeaderItem({ Icon, title, url }: HeaderItemProps) {
  return (
    <Link
      href={url}
      className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'
    >
      <Icon
        className='h-8 mb-1 group-hover:animate-bounce text-white'
        size={32}
      />
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </p>
    </Link>
  );
}
