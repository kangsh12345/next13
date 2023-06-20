import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary py-4">
        <div className="container mx-auto"></div>
      </header>
      <main className="flex-grow container mx-auto">{children}</main>
      <footer className="bg-primary py-4">
        <div className="container mx-auto"></div>
      </footer>
    </div>
  )
}
