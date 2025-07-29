import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowAI',
  description: 'AI-powered workspace that adapts to how your team actually works. Boost productivity by 300% with intelligent automation and seamless collaboration.',
  keywords: 'AI, workflow automation, team collaboration, productivity, SaaS, enterprise software',
  authors: [{ name: 'FlowAI Team' }],
  creator: 'FlowAI',
  publisher: 'FlowAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flowai.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/Logo.png',
  },
  openGraph: {
    title: 'FlowAI - Transform Your Workflow with AI',
    description: 'AI-powered workspace that adapts to how your team actually works. Boost productivity by 300% with intelligent automation and seamless collaboration.',
    url: 'https://flowai.com',
    siteName: 'FlowAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlowAI - AI-Powered Workflow Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowAI - Transform Your Workflow with AI',
    description: 'AI-powered workspace that adapts to how your team actually works. Boost productivity by 300% with intelligent automation and seamless collaboration.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="flowai-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}