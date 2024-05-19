import { NextRequest, NextResponse } from "next/server";
import { defineOneEntry } from "oneentry";



const { FormData } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

export async function POST(req:NextRequest) {
    try {
        const body = await req.json();
        const {name, email, number} = body;
 
        const data = [
            {marker:"name", value:name},
            {marker:"email", value:email},
            {marker:"number", value:number},
        ]
        const value = await FormData.postFormsData({
            formIdentifier:'contactform',
            formData:data
        })

        return NextResponse.json({message:"Success", value});
        
    } catch (error:any) {
        return NextResponse.json({error});
    }

}