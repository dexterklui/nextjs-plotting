import Image from "next/image";
import Link from "next/link";

import paths from "@/app/paths";
import Logo from "@/public/dojo-logo.png";
import LogoutButton from "./LogoutButton";

export default function Navbar({ icon = true, title = null, user, children }) {
  return (
    <nav>
      {icon && (
        <Link href={paths.dashboard}>
          <Image
            src={Logo}
            alt="Dojo Helpdesk logo"
            width={70}
            quality={100}
            placeholder="blur"
          />
        </Link>
      )}
      {title != null && <h1>{title}</h1>}

      {children}

      <span className="w-0 mr-auto" />
      {user && (
        <>
          <span>Hello, {user.email}</span>
          <LogoutButton />
        </>
      )}
    </nav>
  );
}
