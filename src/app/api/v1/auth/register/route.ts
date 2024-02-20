import { db } from "@/app/lib/db"

// type userType = {
//     companyId?: string | undefined
//     email: string
//     name: string

// }
export async function POST(request: Request) {
    
    const  data = await request.json()
    
    try {
        const newUser = await db.user.create({data})
        console.log(newUser)
        return Response.json(newUser,{status: 201})
    } catch (error) {
        return Response.json({error, msg: "OPPS!!, There was an error creating a new User" }, {status: 400})
    }
    
  
}