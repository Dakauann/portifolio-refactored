import { Github, LucideArrowDown, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../../ui/button'

export default function HeaderSection() {
	return (
		<header className='mx-auto m-auto h-no-nav flex flex-col justify-center items-center'>
			<div className='border-b-muted-foreground border-b-2 m-auto flex flex-col justify-center items-center'>
				<h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold'>
					Dakauann Cavalcante
				</h1>
				<h2 className='text-center text-2xl font-semibold'>
					<span className='text-primary'>Full Stack</span> Developer
				</h2>
				<div className='gap-2 grid grid-flow-col'>
					<Button
						className='my-2 px-5 gap-2'
						variant={'secondary'}
						onClick={() => {
							window.open('https://github.com/Dakauann', '_blank')
						}}>
						<Github size={15} /> Github Profile
					</Button>
					<Link
						href={'#'}
						onClick={() => {
							window.open('mailto:dakauannc@gmail.com', '_blank')
						}}>
						<Button className='my-2 px-5 gap-2' variant={'default'}>
							<Mail size={15} /> Contact me
						</Button>
					</Link>
				</div>
			</div>
			<div className='animate-bounce'>
				<LucideArrowDown size={25} className='mb-5 animate-bounce' />
			</div>
		</header>
	)
}
