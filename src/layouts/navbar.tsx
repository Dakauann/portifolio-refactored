'use client'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Download, Eye, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function NavBar() {
	const [isOnPageTop, setIsOnPageTop] = useState(true)

	if (typeof window !== 'undefined') {
		console.log('oppaaa')
		window.onscroll = () => {
			if (window.scrollY === 0) {
				setIsOnPageTop(true)
			} else {
				setIsOnPageTop(false)
			}
		}
	}

	return (
		<nav
			className={`flex h-10 items-center p-2 py-4 duration-300 transition-all sticky top-0 z-[999] ${
				isOnPageTop ? 'backdrop-blur-none' : 'backdrop-blur-xl'
			}`}>
			<Link href={'/'}>
				<Button variant={'outline'} className='gap-1'>
					DAKAUANN<sup className='text-primary'>.dev</sup>
				</Button>
			</Link>

			<div className='ml-auto'>
				<Link href={'/systems'}>
					<Button variant={'link'} className='text-'>
						Systems
					</Button>
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant={'secondary'}>
							Curriculum <Download size={15} />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Choose an option</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className='gap-2'>
							<Download size={15} />
							Download curriculum
						</DropdownMenuItem>
						<DropdownMenuItem className='gap-2'>
							<Eye size={15} /> View curriculum
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	)
}
