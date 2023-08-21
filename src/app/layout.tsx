import '../styles/globals.css'

export const metadata = {
  title: 'SGLink',
  description: 'A links app',
  icons: '/images/SGL.png'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-emerald-500 to-emerald-900'>
        {children}
      </body>
    </html>
  )
}
