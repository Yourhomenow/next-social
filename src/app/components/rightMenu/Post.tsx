import Image from "next/image";
import Comments from "../feed/Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "../feed/PostInteraction";
import { Suspense } from "react";
import PostInfo from "../feed/PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & {user:User} & {
  likes:[{userId:string}]
} & {
  _count:{comment: number}
}

const Post = async ({post}:{post:FeedPostType}) => {
  const {userId} = await auth()

  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {(post.user.name && post.user.surname) 
              ? post.user.name + " " + post.user.surname 
              : post.user.username}
          </span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id}/>}
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {post.img && <div className="w-full min-h-96 relative">
          <Image
            src={post.img}
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>}
        <p>
          {post.desc}
        </p>
      </div>
      {/* INTERACTION */}
      <Suspense>
        <PostInteraction 
          postId={post.id} 
          likes={post.likes.map((like) => like.userId)} 
          commentNumber={post._count.comment}
          />
        <Comments postId={post.id}/>
      </Suspense>
    </div>
  )
}

export default Post;