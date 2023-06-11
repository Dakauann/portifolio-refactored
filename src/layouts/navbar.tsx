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
import { useState } from 'react'

export default function NavBar() {
	const [isDarkMode, setDarkMode] = useState(false)

	return (
		<nav className='flex h-10 items-center p-2 sticky top-0'>
			<Button variant={'outline'} className='gap-1'>
				DAKAUANN<sup className='text-primary'>.dev</sup>
			</Button>

			<div className='ml-auto'>
				<Button variant={'link'} className='text-'>
					Systems
				</Button>
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
