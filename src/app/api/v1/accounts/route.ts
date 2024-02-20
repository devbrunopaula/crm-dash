import { db } from "@/app/lib/db"

export async function GET(){

}

export async function POST(request:Request){

    const { accountName, companyId } = await request.json()

   

    try {
        const newAccount = await db.account.create({
            data: {
                accountName,
                companyId
            }
        })
        return Response.json({ newAccount})
    } catch (error) {
        return Response.json({error, msg: "Opps!! There was en error creating a new Account"})
    }

   
}