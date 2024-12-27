import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import LoginForm from "../components/LoginForm";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function LoginPage() {
  return (
    <div>
      <Card className="p-5 max-w-[350px] mx-2">
        <CardHeader className={`${title({ size: "xs" })} mb-3`}>
          Log in
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
        <CardFooter>
          <p>
            Don&apos;t have an account?{" "}
            <span>
              <Link href={siteConfig.links.signup}>Register</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
