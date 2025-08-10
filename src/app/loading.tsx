import { Spinner } from '@radix-ui/themes'
import React from 'react'

export default function loading() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <Spinner size="3"/>
    </div>
  )
}
