'use client'

import { Button } from '@/components/ui/button'
import { Loader2, LoaderIcon, SkipBack } from 'lucide-react'

export default function Curriculum() {
	return (
		<main className='h-no-nav'>
			<header className='p-2 border-b-slate-600 border-b-2 my-1'>
				<Button
					variant={'secondary'}
					className='gap-2'
					onClick={() => {
						window.history.back()
					}}>
					<SkipBack size={15} /> Go Back
				</Button>
			</header>
			<div className='grid items-center'>
				<h1 className='absolute flex justify-center items-center w-full'>
					<Loader2 size={50} className='animate-spin' />
				</h1>
				<iframe
					src='https://onedrive.live.com/embed?resid=99FC0CE25127341B%2128258&amp;authkey=!AMrTh5jEFx-snw0&amp;em=2&amp;wdStartOn=1'
					width='90%'
					height='100%'
					className='h-no-nav mx-auto rounded z-10'
					frameBorder='0'>
					Este é um documento do{' '}
					<a target='_blank' href='https://office.com'>
						Microsoft Office
					</a>{' '}
					incorporado, da plataforma{' '}
					<a target='_blank' href='https://office.com/webapps'>
						Office
					</a>
					.
				</iframe>
			</div>
		</main>
	)
}
