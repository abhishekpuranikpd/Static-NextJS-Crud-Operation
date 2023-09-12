"use client"
import { useEffect, useState } from "react"

export default function page({params}) {
   let id = params.userid
    console.log(id);
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")

     useEffect(()=>{
          getuserdetails()
     },[])
    const getuserdetails= async ()=>{
      const res =  await fetch("http://localhost:3000/api/users/"+id);
      const data = await  res.json()
      setname(data.name)
      setage(data.age)
      setemail(data.email)
      
    }
 const updateuser=async()=>{
    let result = await fetch("http://localhost:3000/api/users/"+id,{
        method:"PUT",
        body:JSON.stringify({name,age,email})
    })
    result = await result.json()
    console.log(result);
    if(result.success){
        alert("updated")
    }else{
        alert("not updated")
    }
 }
    return (
        <div>
            <h1>User Update Page</h1>

             <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />

            <input type="text" placeholder="age" value={age} onChange={(e) => setage(e.target.value)} />

            <input type="text" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
            <button onClick={updateuser}>Update users</button>
        </div>
    )
}