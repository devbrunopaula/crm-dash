import { db } from "@/app/lib/db"

export async function GET(request: Request) {
    
 
    try {
        const findUsers = await db.user.findMany({
            where: {
                companyId: "37f95076-18ce-4d00-9db5-15571ebe3d2f"
            }
        })
        return Response.json(findUsers,{status: 201})
    } catch (error) {
        return Response.json({error, msg: "OPPS!!, There was an error creating a new User" }, {status: 400})
    }
    
  
}