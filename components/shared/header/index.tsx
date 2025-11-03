import { APP_NAME } from '@/lib/constants';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';

export default function Header() {
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex-between'>
                <div className='flex-start'>
                    <Link href={'/'} className='flex-start'>
                        <Image src="/logo.svg" alt={'Home'} width={48} height={48} />
                    </Link>
                    <span className='hidden lg:block font-bold text-2xl ml-3'>
                        {APP_NAME}
                    </span>
                </div>
                <div className='space-x-2'>
                    <ModeToggle />
                    <Button asChild variant={'ghost'}>
                        <Link href={'/cart'}>
                            <ShoppingCartIcon />Cart
                        </Link>
                    </Button>
                    <Button asChild variant={'ghost'}>
                        <Link href={'/login'}>
                            <UserIcon />Login
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
