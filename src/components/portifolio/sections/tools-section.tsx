import { Brush, Code, Cog, Link2 } from 'lucide-react'
import { Button } from '../../ui/button'

export default function ToolsSection() {
	return (
		<section>
			<div className='w-[95vw] bg- mx-auto rounded -translate-y-10 p-2 grid grid-cols-1 sm:grid-cols-2 gap-2'>
				<div className='rounded p-2 flex flex-col transition-all duration-300 bg-gradient-to-br to-slate-800 via-black from-primary bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-default'>
					<h3 className='text-2xl flex gap-2 mb-5 font-bold items-center text-white'>
						<Brush size={25} /> Frontend Development
					</h3>
					<p className='text-center text-md text-white'>
						As a front-end developer i have built some frontend
						freelance projects such as not associated addons for bet
						sites, movie searching interfaces, landing pages and
						some other projects.
					</p>
					<div className='mt-auto'>
						<h1 className='text-xl font-bold mt-5 flex gap-2 items-center text-white'>
							<Code size={20} /> Technologies i use
						</h1>

						<div className='flex flex-wrap gap-2'>
							<Button
								onClick={() => {
									window.open(
										'https://www.typescriptlang.org/',
										'_blank',
									)
								}}
								variant={'secondary'}
								className='gap-2 flex-auto'>
								Typescript <Link2 size={15} />
							</Button>
							<Button
								onClick={() => {
									window.open('https://nextjs.org/', '_blank')
								}}
								variant={'secondary'}
								className='gap-2 flex-auto'>
								NextJS <Link2 size={15} />
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
								React <Link2 size={15} />
							</Button>
							<Button
								onClick={() => {
									window.open('https://vuejs.org/', '_blank')
								}}
								variant={'secondary'}
								className='gap-2 flex-auto'>
								Vue <Link2 size={15} />
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
								Tailwind Css <Link2 size={15} />
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
								shadcn ui <Link2 size={15} />
							</Button>
						</div>
					</div>
				</div>
				<div className='rounded flex flex-col p-2 transition-all duration-300 bg-gradient-to-br to-slate-800 via-black from-rose-500 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-default'>
					<h3 className='text-2xl flex gap-2 mb-5 font-bold text-white'>
						<Cog size={25} /> Backend Development
					</h3>
					<p className='text-center text-md text-white'>
						As a backend developer i have built automations writen
						in go such as whatsapp automation bots using not
						associated apis, api rests for frontend applications
						using nestjs or nextjs api routes, and some other
						projects.
					</p>

					<div className='mt-auto'>
						<h1 className='text-xl font-bold mt-5 flex gap-2 items-center text-white'>
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
								Typescript <Link2 size={15} />
							</Button>
							<Button
								onClick={() => {
									window.open('https://go.dev/', '_blank')
								}}
								variant={'secondary'}
								className='gap-2 flex-auto'>
								Go <Link2 size={15} />
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
								Mongodb <Link2 size={15} />
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
								Planetscale <Link2 size={15} />
							</Button>
							<Button
								onClick={() => {
									window.open('https://prisma.io/', '_blank')
								}}
								variant={'secondary'}
								className='gap-2 flex-auto'>
								Prismajs <Link2 size={15} />
							</Button>
							<Button
								onClick={() => {
									window.open('https://nestjs.com/', '_blank')
								}}
								variant={'secondary'}
								className='gap-2 flex-auto'>
								Nestjs <Link2 size={15} />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
