import { db } from "@/app/lib/db";

type paramsType = {
    id:  string
  }
  export async function GET(request: Request, { params }: { params: paramsType }) {

    const id = params.id

  try {
    const findUsersByCompanyId = await db.user.findMany({
        where: {
            companyId: id
        }
    })
    return Response.json(findUsersByCompanyId);
  } catch (error) {
    return Response.json({error: "Opps!!, there was an error finding a user by its Id"});
  }
  }