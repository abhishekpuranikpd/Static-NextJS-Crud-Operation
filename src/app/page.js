'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { users } from '../../utils/db'

export default function Home() {
 const [text,setText]=useState('')
 const [text1,setText1]=useState('')
  const deto = text

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={(e)=>{
        e.preventDefault()
         console.log(text);
         console.log(text1);
  
      }}>

<input 
type="text"
value={text}
onChange={(e)=>{setText(e.target.value)}}
/>
<input 
type="text1"
value={text1}
onChange={(e)=>{setText1(e.target.value)}}
/>
<button type='submit'>submit</button>

      </form>
    {
      users.map((item)=>(
        <li id={item.id}>{item.name}</li>
      ))
    }
    
      <h1>{deto}</h1>
      <h1>{deto}</h1>
 

    </main>
  )
}

