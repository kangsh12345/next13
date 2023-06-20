type PageParams = {
  slug: string
}

export default function Page({ params }: { params: PageParams }) {
  console.log({ params })
  return <div>{params.slug}</div>
}
