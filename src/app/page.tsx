'use client'

import { Button } from '@/components/ui/button'
import {
	ArrowDown,
	Brush,
	Code,
	Cog,
	Link,
	LucideArrowBigDown,
	LucideArrowDown,
	MoveDown,
	ScreenShare,
	Scroll,
} from 'lucide-react'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

export default function Home() {
	return (
		<main className='h-no-nav flex flex-col p-1 py-2'>
			<header className='mx-auto m-auto h-no-nav flex flex-col justify-center items-center'>
				<div className='border-b-muted-foreground border-b-2 m-auto'>
					<h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-bold'>
						Dakauann Cavalcante
					</h1>
					<h2 className='text-center text-2xl font-semibold'>
						<span className='text-primary'>Full Stack</span>{' '}
						Developer
					</h2>
				</div>
				<div className='animate-bounce'>
					<LucideArrowDown
						size={25}
						className='mb-5 animate-bounce'
					/>
				</div>
			</header>

			<section className='bg-slate-800 rounded translate-y-8'>
				<div className='w-[95vw] bg-secondary mx-auto rounded -translate-y-10 p-2 grid grid-cols-1 sm:grid-cols-2 gap-2'>
					<div className='rounded p-2 transition-all duration-300 bg-gradient-to-br to-slate-800 via-black from-primary bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-default'>
						<h3 className='text-2xl flex gap-2 mb-5 font-bold items-center'>
							<Brush size={25} /> Frontend Development
						</h3>
						<p className='text-center text-md'>
							As a front-end developer i have built some frontend
							freelance projects such as not associated addons for
							bet sites, movie searching interfaces, landing pages
							and some other projects.
						</p>
						<div>
							<h1 className='text-xl font-bold mt-5 flex gap-2 items-center'>
								<Code size={20} /> Technologies i use
							</h1>

							<div className='flex flex-wrap gap-2 mt-2'>
								<Button
									onClick={() => {
										window.open(
											'https://www.typescriptlang.org/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Typescript <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://nextjs.org/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									NextJS <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://reactjs.org/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									React <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://vuejs.org/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Vue <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://tailwindcss.com/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Tailwind Css <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://ui.shadcn.com/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									shadcn ui <Link size={15} />
								</Button>
							</div>
						</div>
					</div>
					<div className='rounded p-2 transition-all duration-300 bg-gradient-to-br to-slate-800 via-black from-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-default'>
						<h3 className='text-2xl flex gap-2 mb-5 font-bold'>
							<Cog size={25} /> Backend Development
						</h3>
						<p className='text-center text-md'>
							As a backend developer i have built some backend
							freelance projects such as not associated addons for
							bet sites, movie searching interfaces, landing pages
							and some other projects.
						</p>

						<div>
							<h1 className='text-xl font-bold mt-5 flex gap-2 items-center'>
								<Code size={20} /> Technologies i use
							</h1>

							<div className='flex flex-wrap gap-2 mt-2'>
								<Button
									onClick={() => {
										window.open(
											'https://www.typescriptlang.org/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Typescript <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open('https://go.dev/', '_blank')
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Go <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://www.mongodb.com/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Mongodb <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://planetscale.com/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Planetscale <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://prisma.io/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Prismajs <Link size={15} />
								</Button>
								<Button
									onClick={() => {
										window.open(
											'https://nestjs.com/',
											'_blank',
										)
									}}
									variant={'secondary'}
									className='gap-2 flex-auto'>
									Nestjs <Link size={15} />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
