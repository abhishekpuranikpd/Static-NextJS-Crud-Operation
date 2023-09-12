"use client"
import { useState } from "react"

export default function page(){
    const [name, setName]=useState("")
    const [age, setAge]=useState("")
    const [email, setEmail]=useState("")
  const adduser = async()=>{
    const res = await fetch("http://localhost:3000/api/users",{
      method:"Post",
      body:JSON.stringify({name,age,email})
    })
    const data = await res.json();
    if(!res.success){
      alert("yes")
    }else{
      alert("no")
    }
    console.log(data);
  }
    return( 
        <div>
            <h1>Add New User</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Name" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" placeholder="Name" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={adduser}> Add New User</button>
        </div>
    )
}