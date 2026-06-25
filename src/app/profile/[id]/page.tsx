import Feed from "@/app/components/Feed"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import Image from "next/image"

const ProfilePage = ({userId} : {userId:string}) => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image 
                src="https://images.unsplash.com/photo-1781768651523-7e75cff66a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
                fill
                className="object-cover rounded-md"
              />
              <Image 
                src="https://images.unsplash.com/photo-1780510060437-96e6572f3f1f?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Ivy McBride
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  123
                </span>
                <span className="text-sm">
                  Posts
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  1.2k
                </span>
                <span className="text-sm">
                  Follower
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  13k
                </span>
                <span className="text-sm">
                  Following
                </span>
              </div>
            </div>

          </div>
          <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId='test'/>
      </div>
    </div>
  )
}

export default ProfilePage