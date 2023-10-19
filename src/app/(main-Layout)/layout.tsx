"use client"
import MainFooter from "@/components/Shared/MainFooter"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
    <div className="bg-amber-700">

    </div>

        <div>{children}</div>

    <MainFooter></MainFooter>
    </>


  )
}
