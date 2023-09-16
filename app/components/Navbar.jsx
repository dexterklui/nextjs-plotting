import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/dojo-logo.png";
import paths from "@/app/paths";

export default function Navbar({ icon = true, title = null, children }) {
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
    </nav>
  );
}
