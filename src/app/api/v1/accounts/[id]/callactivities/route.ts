
type paramsType = {
  id: number | string
}
export async function GET(request: Request, { params }: { params: paramsType }) {
  const id = params.id
  return Response.json({ 
    endPoint: "v1/accounts/{id}/callactivities",
    id
});
}