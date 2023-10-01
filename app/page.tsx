"use client"

import { Poppins } from "next/font/google"
const fontPoppins = Poppins({ subsets: [ 'latin' ], weight: [ '500', '600', '700', '800', '900' ] })

export default function Page() {
  return (
    <>
      <main className={fontPoppins.className}>
        <h1>Welcome to NextUI V2 Starter! 🚀</h1>
        <p>Explore <b>page.tsx</b> or <b>tailwind.config.js</b> to customize your app. </p>
      </main>
    </>
  )
}