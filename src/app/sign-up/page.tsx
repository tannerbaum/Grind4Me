import { StandardCard } from "@/components/standard-card";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-1 items-center self-center animate-fade-from-top w-full max-w-[420px]">
      <StandardCard
        title="Sign up"
        description="Create an account to get started"
        content={<SignUpForm />}
        footer={
          <Link className="text-sm text-muted-foreground" href="/sign-in">
            Have an account? Sign in.
          </Link>
        }
      />
    </div>
  );
};

export default SignUpPage;
