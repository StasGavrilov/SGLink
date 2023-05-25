import '../styles/globals.css'

export const metadata = {
  title: 'SGLink',
  description: 'A links app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-gray-500 to-gray-400 '>{children}</body>
    </html>
  )
}
