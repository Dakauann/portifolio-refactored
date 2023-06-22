import { Button } from '@/components/ui/button'
import { Link2 } from 'lucide-react'
import Link from 'next/link'

function generateRandomGradient(): string {
	const colors = [
		['from-red-600', 'to-blue-600'],
		['from-blue-600', 'to-green-600'],
		['from-green-600', 'to-yellow-600'],
		['from-yellow-600', 'to-purple-600'],
		['from-purple-600', 'to-pink-600'],
		['from-pink-600', 'to-indigo-600'],
		['from-indigo-600', 'to-teal-600'],
		['from-teal-600', 'to-lime-600'],
		['from-slate-800', 'to-orange-600'],
		['from-orange-600', 'to-red-600'],
	]

	// Randomly select a gradient
	const randomIndex = Math.floor(Math.random() * colors.length)
	const selectedGradient = colors[randomIndex]

	return `bg-gradient-to-r ${selectedGradient[0]} ${selectedGradient[1]}`
}

export default function SystemsPage() {
	const projects = [
		{
			name: 'DAKAUANN.dev',
			description: 'My personal and professional website.',
			technologies: ['NextJS', 'React', 'Tailwind CSS', 'shadcn ui'],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Dakauann/portifolio-refac',
				},
			],
		},
		{
			name: 'Lumin-ui',
			description:
				'A simple and beautiful UI library built using Tailwind CSS.',
			technologies: ['React', 'Tailwind CSS'],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Dakauann/lumin-ui',
				},
				{
					name: 'Site',
					url: 'https://lumin-ui.vercel.app/',
				},
			],
		},
		{
			name: 'React Lumin-ui',
			description:
				'A simple and beautiful UI library built using Tailwind CSS.',
			technologies: ['React', 'Tailwind CSS'],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Dakauann/react-luminui',
				},
				{
					name: 'Site',
					url: 'https://lumin-ui.vercel.app/components/react/buttons',
				},
			],
		},
	]

	return (
		<main className='p-2'>
			<header>
				<h1 className='text-2xl font-bold'>My projects</h1>
			</header>
			<section className='grid gap-2 auto-rows-auto columns-3xs sm:grid-cols-3 mt-4'>
				{projects.map((project, index) => {
					const gradient = generateRandomGradient()
					return (
						<div
							className={`p-2 px-4 py-5 rounded shadow-lg ${gradient} flex flex-col shadow-xl`}
							key={index}>
							<h2 className='text-2xl font-bold'>
								{project.name}
							</h2>
							<p className='text-md'>{project.description}</p>
							<div className='mt-2 gap-1 flex flex-wrap items-center h-full'>
								{project.technologies.map((tech, index) => {
									return (
										<Button
											className='flex-auto rounded-full text-[0.6rem]'
											variant={'secondary'}
											key={index}>
											{tech}
										</Button>
									)
								})}
							</div>
							<div className='flex mt-auto'>
								{project.links.map((link, index) => {
									return (
										<Link
											className='text-sm px-1 w-max'
											href={link.url}
											key={index}
											target='_blank'
											passHref>
											<Button
												variant={'link'}
												className='gap-2 mt-2'>
												{link.name} <Link2 size={15} />
											</Button>
										</Link>
									)
								})}
							</div>
						</div>
					)
				})}
			</section>
		</main>
	)
}
