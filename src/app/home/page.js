'use client'

import Header from '../components/Header/Header'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-2 text-gray-600">This is the starting point of your client-side app.</p>
      </main>
    </>
  )
}
