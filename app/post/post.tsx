import { use } from "react"
import { getPosts } from "../api/post/getPosts"

export type PostProps = {
  postPromise: Promise<Post[]>
}

export const Post = () => {
  const posts = use(getPosts())

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2">
            By {post.author} | {post.date}
          </p>
          <p className="mb-4">{post.content}</p>
          <div className="bg-gray-100 p-2 rounded">
            {post.comments.map((comment, idx) => (
              <div key={comment.id} className="mb-2">
                <p className="text-gray-600 mb-1">{comment.author}</p>
                <p>{comment.text}</p>
                <div>{JSON.stringify(post.time)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
