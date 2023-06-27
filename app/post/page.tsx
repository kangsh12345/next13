import { headers } from "next/headers"
// import { getPosts } from "../lib/get-posts"
import { getPosts } from "../api/post/getPosts"
import { Suspense } from "react"
import { LoadingSkeleton } from "../ui/LoadingSkeleton"
import { Post } from "./post"

// const session = null

export const validate = 0

export const PostPage = async () => {
  const header = headers()
  const posts = await getPosts()

  // if (session == null) {
  //   throw new Error("no session provided")
  // }
  // console.log("posts: ", posts)
  console.log("middleware request-time: ", header.get("request-time"))

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div>
        this is not from data fetching: {new Date().getTime().toString()}
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        <Post />
      </Suspense>
      {/* {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2">
            By {post.author} | {post.date}
          </p>
          <p className="mb-4">{post.content}</p>
          <div className="bg-gray-100 p-2 rounded">
            {post.comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <p className="text-gray-600 mb-1">{comment.author}</p>
                <p>{comment.text}</p>
                <div>{JSON.stringify(post.time)}</div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default Post
