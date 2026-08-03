import { NextResponse } from "next/server";


export async function POST(request: Request) {

    try {

        const body = await request.json();


        console.log("Contact request:", body);


        return NextResponse.json(
            {
                success: true,
                message: "Message received"
            },
            {
                status: 200
            }
        );


    } catch(error) {

        return NextResponse.json(
            {
                success:false,
                message:"Invalid request"
            },
            {
                status:400
            }
        );

    }

}