import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
