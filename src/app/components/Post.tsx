import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image 
            src='https://images.unsplash.com/photo-1781694949169-8dad95b59995?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt="" 
            width={40} 
            height={40} 
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image 
            src='/more.png' 
            alt="" 
            width={16} 
            height={16} 
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image 
            src="https://images.unsplash.com/photo-1781613977723-cc97e7cdff85?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita perspiciatis quos natus, magni animi quisquam molestias possimus eaque nam aperiam quod odit nihil atque, aliquid eligendi, repellat id reprehenderit vel.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image 
            src="/like.png"
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image 
            src="/comment.png"
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image 
            src="/share.png"
            width={16}
            height={16}
            className="cursor-pointer"
            alt=""
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default Post;