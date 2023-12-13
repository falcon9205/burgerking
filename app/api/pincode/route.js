import { NextResponse } from "next/server";
export async function GET(req){
    const pincode = ["110084","122033","110009","712002","110034","110094","110034","110042","110005","110023","110009"]
    return NextResponse.json({pincode})
}