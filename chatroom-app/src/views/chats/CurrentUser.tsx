"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { getImageUrl } from "@/app/config/get-image-url.config";
import { IUser } from "@/core/types/user.types";
import { getFileUrl } from "@/core/utils/pbUtils";
import { Loader } from "@/components/loader/Loader";

export function CurrentUser({ user }: { user: IUser }) {
  const { push } = useRouter();
  // const { data, isLoading } = useProfile();
  return (
    <div className="flex items-center justify-between p-layout">
      <div className="flex items-center">
        {!user ? (
          <Loader />
        ) : (
          <Image
            src={user.avatar ?? "/no-avatar.png"}
            alt={user?.email || ""}
            width={50}
            height={50}
            className="mr-4"
            priority
          />
        )}
        <div className="text-sm">
          <div>{user?.username}</div>
          <div className="opacity-30">{user.role ?? "No role"}</div>
        </div>
      </div>
      <button
        onClick={() =>
          signOut({
            redirect: false,
          }).then(() => {
            window.localStorage.removeItem("token");
            push("/login");
          })
        }
        className="text-[#7C7275] transition-colors ease-linear hover:text-white"
      >
        <LogOut />
      </button>
    </div>
  );
}
