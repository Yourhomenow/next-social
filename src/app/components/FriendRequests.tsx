import Image from "next/image"
import Link from "next/link"

const FriendRequests = ({userId} : {userId?:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image 
            src="https://images.unsplash.com/photo-1782022491533-267c13b410bf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            width={40} 
            height={40} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image 
            src="/accept.png" 
            alt="" 
            width={20} 
            height={20} 
            className="cursor-pointer"
          />
          <Image 
            src="/reject.png" 
            alt="" 
            width={20} 
            height={20} 
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image 
            src="https://images.unsplash.com/photo-1782022491533-267c13b410bf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            width={40} 
            height={40} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image 
            src="/accept.png" 
            alt="" 
            width={20} 
            height={20} 
            className="cursor-pointer"
          />
          <Image 
            src="/reject.png" 
            alt="" 
            width={20} 
            height={20} 
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image 
            src="https://images.unsplash.com/photo-1782022491533-267c13b410bf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            width={40} 
            height={40} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image 
            src="/accept.png" 
            alt="" 
            width={20} 
            height={20} 
            className="cursor-pointer"
          />
          <Image 
            src="/reject.png" 
            alt="" 
            width={20} 
            height={20} 
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default FriendRequests