import { Button } from '@/components/ui/button'

export default function PageNotFound() {
	return (
		<main className='h-no-nav flex flex-col justify-center items-center'>
			<h1 className='text-9xl font-bold'>404</h1>
			<h2 className='text-4xl font-semibold'>Page not found</h2>

			<p className='text-lg text-center'>
				The page you are looking for does not exist or has been moved.
			</p>

			<div className='mt-4'>
				<Button>Go back home</Button>
			</div>
		</main>
	)
}
