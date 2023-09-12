import { NextResponse } from "next/server";
import { users } from "../../../../../utils/db";

export function GET(request, { params }) {
  const data = users;
  const userdata = data.filter((item) => item.id == params.id);

  if (userdata.length === 0) {
 
    return NextResponse.json({ message: "No data" }, { status: 404 });
  }

  return NextResponse.json(userdata[0], { status: 200 });
}
 export async function PUT(request,content){
  const payload = await request.json();
  payload.id = content.params.id
  console.log(payload);
if(!payload.id || !payload.name || !payload.age || !payload.email){
  return NextResponse.json({result:"required to update",success:false},{status:404})
}else{
  return NextResponse.json({result:"Updated",success:true}, {status:200})}
 }

 export function DELETE(request,content){
  let id = content.params.id;
  if(id){
    return NextResponse.json({result:"user deleted",success:true},{status:200})
  } else{
    return NextResponse.json({result:"not deleted",success:false},{status:400})
  }
 }