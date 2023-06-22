import NavBar from '@/layouts/navbar'
import PageTransitionWrapper from '@/wrappers/page-transition-wrapper'
import motion from 'framer-motion'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'DAKAUANN.dev',
	description: 'My personal and professional website.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className + ' dark bg-dots max-w-[100vw]'}>
				<div className='relative min-h-screen'>
					<NavBar />
					<div className='anim-blob' />
					<div className='absolute inset-0 z-[-10]'>
						<div className='absolute inset-0 overflow-hidden'>
							<div className='absolute inset-0 -skew-y-12 rounded-full bg-gradient-to-r from-muted to-transparent anim-blob transition-all' />
							<div className='absolute inset-0 -rotate-6 -skew-y-12 rounded-full bg-gradient-to-r from-gray-800 to-transparent anim-blob' />
							<div className='absolute inset-0 -rotate-12 -skew-y-12 rounded-full bg-gradient-to-r from-gray-600 to-transparent anim-blob' />
						</div>
					</div>
					<div className='relative z-10'>
						<PageTransitionWrapper>
							{children}
						</PageTransitionWrapper>
					</div>
				</div>
			</body>
		</html>
	)
}
