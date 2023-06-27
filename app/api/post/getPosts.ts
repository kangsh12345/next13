import { getBaseUrl } from "@/app/lib/getBaseUrl"

export const getPosts = async () => {
  const response = await fetch(`${getBaseUrl()}/api/post`, {
    next: {
      revalidate: 0,
    },
    // cache: "default",
  })

  if (!response.ok) {
    throw new Error("something went to wrong")
  }

  return (await response.json()) as Post[]
}
