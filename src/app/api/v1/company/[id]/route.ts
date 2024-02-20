import { db } from "@/app/lib/db";

type paramsType = {
    id:  string
  }
  export async function GET(request: Request, { params }: { params: paramsType }) {

    const id = params.id

  try {
    const findCompanyById = await db.company.findUnique({
        where: {
             id
        }
    })
    return Response.json({ findCompanyById});
  } catch (error) {
    
  }
  }