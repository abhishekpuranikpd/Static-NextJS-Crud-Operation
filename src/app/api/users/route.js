import { NextResponse } from "next/server";
import { users } from "../../../../utils/db";

export function GET(){
    const data = users;
    return NextResponse.json(data,{status:200})
} 
export async function POST(request){
    let data = await request.json()
    console.log(data.name);
    console.log(data.age);
    if(!data.name || !data.age || !data.email){
        return NextResponse.json({result: "Nodata",success:false})
    }
    return NextResponse.json({result: "New User Created",success:true},{status:200})
}