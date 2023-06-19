export default function page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>page</div>
      <div>{children}</div>
    </>
  )
}
