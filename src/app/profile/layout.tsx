"use client"
import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import { useAppSelector } from "@/redux/hooks";
import { decodedToken } from "@/utils/jwt";
import { useRouter } from "next/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const router = useRouter();
    const { token } = useAppSelector((state) => state.userAccessToken);
    const data: any = decodedToken(token);
  
    if (data?.role !== "customer") {
      router.push("/");
    }

  return (
    <div>
      <ProfileHeader></ProfileHeader>
      {children}
    </div>
  );
}
