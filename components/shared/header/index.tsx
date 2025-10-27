import { APP_NAME } from '@/lib/constants';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex-between'>
                <div className='flex-start'>
                    <Link href={'/'} className='flex-start'>
                        <Image src="/logo.svg" alt={"Home"} width={48} height={48} />
                    </Link>
                    <span className='hidden lg:block font-bold text-2xl'>
                        {APP_NAME}
                    </span>
                </div>
                {/* <div className='space '>

                </div> */}
            </div>
        </header>
    )
}
