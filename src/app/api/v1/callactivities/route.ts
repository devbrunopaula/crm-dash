import { db } from "@/app/lib/db";


export async function GET(request: Request) {

    const {subject, accountId, companyId, userId} = await request.json()
    try {
        const newCallActivities = await db.callActivity.create({
            data: {
                subject,
                accountId,
                companyId,
                userId
                
            }
        })

        return  Response.json({ newCallActivities }, { status: 201})
    } catch (error) {
        Response.json({ error, msg: "OPPS!! There was an error creating a new Call Activities" })
    }
    
    

  }