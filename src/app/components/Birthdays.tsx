import Image from "next/image"
import Link from "next/link"

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 text-white text-xs px-2 py-2 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg items-center gap-4 flex flex-row">
        <Image 
          src="/gift.png" 
          alt="" 
          width={24} 
          height={24} 
        />

        <Link href="/" className="flex flex-col gap-1 text-xs">
        <span className="text-gray-700 font-semibold">
          Upcoming Birthday
        </span>
        <span className="text-gray-500">
          See other 16 have upcoming birthdays
        </span>
        </Link>
      </div>
    </div>
  )
}

export default Birthdays