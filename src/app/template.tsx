'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TemplateRootPage({
	children,
}: {
	children: React.ReactNode
}) {
	const animation = {
		initial: {
			opacity: 0,
			transition: {
				duration: 1,
			},
			transform: 'translateY(-15px)',
		},
		animate: {
			opacity: 1,
			transform: 'translateY(0px)',
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1,
			},
			transform: 'translateY(-15px)',
		},
	}

	return (
		// <motion.div
		// 	variants={animation}
		// 	initial='initial'
		// 	animate='animate'
		// 	exit='exit'>
			{children}
		// </motion.div>
	)
}
