import Link from 'next/link'
import React from 'react'

export default function LeftSideBar() {
  return (
    <div className='h-screen bg-gray-400 w-2/12 flex flex-col gap-4'>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/collections">Collection</Link>
        <Link href="/dashboard/categories">Categories</Link>
    </div>
  )
}
