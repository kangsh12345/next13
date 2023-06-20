export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>page</div>
      <div>{children}</div>
    </>
  )
}
