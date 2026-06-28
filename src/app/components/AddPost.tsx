import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image"

const AddPost = async () => {

  const {userId} = await auth();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image 
        src="https://images.unsplash.com/photo-1563288525-8f1ee0f874a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt=""
        width={48} 
        height={48} 
        className="w-12 h-12 object-cover rounded-full" 
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action="" className="flex gap-4">
          <textarea 
            placeholder="what's on your mind?" 
            className="bg-slate-100 rounded-lg flex-1 p-2" 
            name="desc" 
          ></textarea>
          <Image 
            src="/emoji.png" 
            alt=""
            width={20} 
            height={20} 
            className="w-5 h-5 object-cover rounded-full cursor-pointer"  
          />
          <button>Send</button>
        </form>
        {/* POST OPTION */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} className="" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} className="" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} className="" />
            Post
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} className="" />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost