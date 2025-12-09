// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Bienvenue sur mon portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="allpage">{children}</body>
    </html>
  )
}
