import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const isLoggedIn = true;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>CredSafe.&nbsp;</span>
        <br />
        <span className={title()}>Password Haven for all.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Access your passwords anytime, anywhere
        </div>
      </div>

      <div className="flex gap-2">
        {isLoggedIn ? (
          <>
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.login}
            >
              Log In
            </Link>
            <Link
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
              })}
              href={siteConfig.links.signup}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link
              className={buttonStyles({
                color: "secondary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.dashboard}
            >
              Go to Dashboard
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
