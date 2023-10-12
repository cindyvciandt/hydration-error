import React from "react"
import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicButton = dynamic(() => import('./Button'))

export function Header() {
  return (
    <header>
      <h2>Title</h2>
      <DynamicButton />
      <nav >
        <Link href='/about'>About</Link>
        <br/>
        <Link href='/shop'>Shop</Link>
      </nav>
    </header>
  )
}

