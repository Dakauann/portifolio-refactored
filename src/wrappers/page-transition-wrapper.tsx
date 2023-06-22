'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

export default function PageTransitionWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	const path = usePathname()
	console.log(path)

	const variants = {
		initial: {
			opacity: 0,
			y: 10,
		},
		enter: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
				ease: 'easeInOut',
			},
		},
		leave: {
			opacity: 0,
			y: -10,

			transition: {
				duration: 0.2,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<div className='overflow-hidden'>
			<AnimatePresence initial={false} mode='wait'>
				<motion.div
					className='h-full'
					initial='initial'
					exit='leave'
					animate='enter'
					key={path}
					variants={variants}>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
