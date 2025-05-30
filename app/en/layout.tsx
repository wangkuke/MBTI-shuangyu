import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'MBTI Test - Discover Your True Self',
  description: 'Professional MBTI personality test to help you understand your true self and discover your potential.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
