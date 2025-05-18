'use client'

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">SAR Collection</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}
