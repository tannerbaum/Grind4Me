import { StandardCard } from "@/components/standard-card";
import { SignInForm } from "@/features/auth/components/sign-in-form";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex flex-1 items-center self-center animate-fade-from-top w-full max-w-[420px]">
      <StandardCard
        title="Sign up"
        description="Create an account to get started"
        content={<SignInForm />}
        footer={
          <>
            <Link className="text-sm text-muted-foreground" href="/sign-up">
              No account yet?
            </Link>
            <Link
              className="text-sm text-muted-foreground justify-self-end"
              href="/password-forgot"
            >
              Forgot Password?
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignInPage;
