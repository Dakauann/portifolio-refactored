import { Button } from '@/components/ui/button'
import { Link2 } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsSection() {
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
		<section className='-translate-y-20 gap-2 grid'>
			<h1 className='text-2xl flex before:rounded-sm -translate-x-4 font-bold items-center mb-2 before:content-[""] before:block before:translate-x-6 before:opacity-30 before:w-7 before:h-full before:py-8 before:bg-primary'>
				My Front-End projects
			</h1>
			{projects.map((project, index) => {
				return (
					<div
						className={`p-2 px-4 rounded-lg flex flex-col shadow-xl border-l-primary border-l-2`}
						key={index}>
						<h2 className='text-2xl font-bold'>{project.name}</h2>
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
	)
}
