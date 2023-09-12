import Link from "next/link";
import Delete from "../../../utils/deleteuser";

async function getusers(){
  const res = await fetch("http://localhost:3000/api/users")
  const data = await res.json();
  return data;
}

export default async function users(){
  const userdata = await getusers();
  console.log(userdata);
  return(
    <div>{
      userdata.map((item)=>(
        <div>
       <li key={item.id}> <Link key={item.id}href={`users/${item.id}`}>{item.name}</Link> </li>
       <span><Link key={item.id}href={`users/${item.id}/update`}>Edit</Link></span>
      
       <span><Delete id={item.id}/></span>
       </div>
      ))
      }</div>
  )
}