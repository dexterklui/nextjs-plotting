import Link from "next/link";
import paths from "../paths";
import Navbar from "../(components)/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar title="Dojo Helpdesk">
        <Link href={paths.signup}>Sign up</Link>
        <Link href={paths.login}>Log in</Link>
      </Navbar>
      {children}
    </>
  );
}
