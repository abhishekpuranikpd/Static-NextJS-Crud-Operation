"use client"
export default function Delete(props){
    let id = props.id;
    console.log(id);
    const deleteuser=async()=>{
        const res = await fetch("http://localhost:3000/api/users/"+id,{
            method:"delete"
        })
        const data = await res.json();
        if(data.success){
            alert("true")
        }else {alert("false")}
    }
    return(
        <button onClick={deleteuser}>Delete</button>
    )
}