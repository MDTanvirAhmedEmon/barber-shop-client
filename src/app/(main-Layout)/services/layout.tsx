"use client"
import MainFooter from "@/components/Shared/MainFooter"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/app/loading";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {token} = useAppSelector((state) => state.userAccessToken)
  const router = useRouter();

  useEffect(() => {
    if(!token){
      router.push('/login');
    }
    <Loading></Loading>
  },[router])
  return (
    <>
    <div className="bg-amber-700">

    </div>

        <div>{children}</div>
    </>


  )
}
