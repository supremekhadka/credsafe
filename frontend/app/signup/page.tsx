import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import SignUpForm from "../components/SignUpForm";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function LoginPage() {
  return (
    <div>
      <Card className="p-5 md:min-w-[325px] max-w-[350px] mx-2">
        <CardHeader className={`${title({ size: "xs" })} mb-3`}>
          Sign Up
        </CardHeader>
        <CardBody>
          <SignUpForm />
        </CardBody>
        <CardFooter>
          <p>
            Have an account?{" "}
            <span>
              <Link href={siteConfig.links.login}>Log In</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
