'use client'
export default function Student({params}){
    console.log(params)
    return(
        <><h1>Students.deatil</h1>
        <h6>name:{params.student}</h6></>
    )
}