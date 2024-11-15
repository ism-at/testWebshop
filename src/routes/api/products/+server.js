import  { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const products = await prisma.product.findMany();

        return new Response(
            JSON.stringify({
                products               
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "Application-JSON fetching successful"
                }
            }
        )
    }
    catch(e){
        return new Response(
            JSON.stringify({
                message: "Something went wrong",
                error: e                
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "Application-JSON fetching failed"
                }
            }
        )
    }
}