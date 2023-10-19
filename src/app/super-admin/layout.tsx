"use client";

import SuperAdminSideBar from "@/components/adminSildeBar/SuperAdminSideBar";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { decodedToken } from "@/utils/jwt";
import { useRouter } from "next/navigation";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const router = useRouter()
    const { token } = useAppSelector((state) => state.userAccessToken);
    const data:any = decodedToken(token)

    if(data?.role !== 'super-admin'){
      router.push('/');
    }

  return (
    <>
      <div className="bg-amber-700 "></div>
      <div className="flex">
        <SuperAdminSideBar></SuperAdminSideBar>

        <div className="w-full ml-[300px]">
        <div className="h-16 px-10 bg-slate-200 flex justify-end items-center">
            <Link className="text-md font-bold hover:bg-secondaryColor hover:text-white border border-secondaryColor px-4 py-1 rounded-2xl" href={'/'}>Live Site</Link>
        </div>
        <div className="ml-4 mt-3">{children}</div>
        </div>
      </div>
    </>
  );
}
