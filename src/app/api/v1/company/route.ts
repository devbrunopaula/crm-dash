import { db } from "@/app/lib/db"

export async function POST(request:Request){

   const { companyName } = await request.json()

  

   try {
       const newCompany = await db.company.create({
           data: {
               companyName,
               
           }
       })
       return Response.json({...newCompany})
   } catch (error) {
       return Response.json({error, msg: "Opps!! There was en error creating a new Company"})
   }

  
}