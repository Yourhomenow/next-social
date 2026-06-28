import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import { WebhookEvent } from '@clerk/nextjs/webhooks';
import prisma from '@/lib/client';

export async function POST(req: NextRequest) {

  try {
    const evt = await verifyWebhook(req)
    
    const { id } = evt.data;
    const eventType = evt.type;
    const body = evt.data;



    // console.log(`Webhook ID: ${id}, type: ${eventType}`)
    // console.log('Webhook body:', body)

    if(eventType === "user.created"){
      try{
        
        await prisma.user.create({
          data: {
            id: evt.data.id,
            username: evt.data.username,
            avatar: body.image_url || "/noAvatar.png",
            cover: "/noCover.png"
          }
        })
        return new Response("User has been created!", { status:200 })


      }catch(err){
        console.log(err)
        return new Response("Failed to create the user!", { status:500 })
      }
    }
    
    
    if(eventType === "user.updated"){
      try{
        
        await prisma.user.update({
          where: {
            id:evt.data.id
          },
          data: {
            id: evt.data.id,
            username: evt.data.username,
            avatar: body.image_url || "/noAvatar.png",
            cover: "/noCover.png"
          }
        })
        return new Response("User has been updated!", { status:200 })


      }catch(err){
        console.log(err)
        return new Response("Failed to update the user!", { status:500 })
      }
    }

    
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', { status: 400 })
  }
}






















  // const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET
  
  // if (!WEBHOOK_SECRET){
  //   throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env")
  // }
  
  // const headerPayload = headers();
  // const svix_id = headerPayload.get("svix-id");
  // const svix_timestamp = headerPayload.get("svix-timestamp")
  // const svix_signature = headerPayload.get("svix-signature")

  // if (!svix_id || !svix_timestamp || !svix_signature){
  //   return new Response('Error occured -- no svix header',{
  //     status : 400
  //   })
  // }
  
  // const payload = await req.json()
  // const body = JSON.stringify(payload);

  // const wh = new Webhook(WEBHOOK_SECRET);
  
  // let evt: WebhookEvent

  // try{
  //   evt = wh.verify(body, {
  //     "svix-id": svix_id,
  //     "svix-timestamp" : svix_timestamp,
  //     "svix-signature": svix_signature
  //   }) as WebhookEvent
  // } catch (err){
  //   console.error("Error verifying webhook: ", err);
  //   return new Response('Error occured',{
  //     status:400
  //   })
  // }

  // const { id } = evt.data;
  // const eventType = evt.type;
  // console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  // console.log('Webhook body:', body)

  // return new Response('', { status: 200 })
// }
