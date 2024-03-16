import { NextResponse } from "next/server";
export async function GET(req){
    const pincode = ["110084","122033","110009","712002","110034","110094","110034","110042","110005","110023","110009","110074","122733","110239","712402","110434","110494","117034","112042","110505","114523","110409"]
    return NextResponse.json({pincode})
}