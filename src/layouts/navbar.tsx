import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function NavBar() {
	return (
		<nav className='flex h-10 items-center p-2 sticky top-0'>
			<Button variant={'outline'} className='gap-1'>
				DAKAUANN<sup className='text-primary'>.dev</sup>
			</Button>

			<div className='ml-auto'>
				<Button variant={'link'} className='text-white'>
					Systems
				</Button>
				<Button variant={'secondary'} className='text-white gap-2'>
					Curriculum <Download size={15}/>
				</Button>
			</div>
		</nav>
	)
}
