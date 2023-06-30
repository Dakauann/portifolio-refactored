'use client'

import HeaderSection from '@/components/portifolio/sections/header-section'
import ProjectsSection from '@/components/portifolio/sections/projects-section'
import ToolsSection from '@/components/portifolio/sections/tools-section'
import { Button } from '@/components/ui/button'
import {
	ArrowDown,
	Brush,
	Code,
	Cog,
	Github,
	Link2,
	LucideArrowBigDown,
	LucideArrowDown,
	Mail,
	MoveDown,
	ScreenShare,
	Scroll,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes, useEffect } from 'react'

export default function Home() {
	return (
		<main className='h-no-nav flex flex-col p-1 py-2'>
			<HeaderSection />

			<div className='bg-background rounded translate-y-8'>
				<ToolsSection />
				<div className='w-[5px] amin-blob bg-primary min-h-[20rem] blur-[10px] mx-auto rounded drop-shadow-glow' />
				<ProjectsSection />
			</div>
		</main>
	)
}
