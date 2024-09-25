import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={"/assets/icons/logo-icon.svg"}
          alt="Logo"
          width={32}
          height={32}
          className=""
        />
        <p className="text-white text-xl tracking-wide hidden md:block">
          DocJam
        </p>
      </Link>
      {children}
    </div>
  );
};

export default Header;
