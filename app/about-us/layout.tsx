

export const metadata = {
    title: 'about-us ',
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>

         {children}
        &copy; Next JS is great!
    </div>

  )
}
