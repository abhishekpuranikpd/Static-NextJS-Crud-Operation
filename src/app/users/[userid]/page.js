async function getuser(id){
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json();
    return data;
  }
export default async function page({params}){
    console.log(params);
    const user = await getuser(params.userid)
    console.log(user);
    return(
        <div>
            <h1>User deatail</h1>
            <h3>Name: {user.name}</h3>
            <h3>Name: {user.name}</h3>
        </div>
    )
}