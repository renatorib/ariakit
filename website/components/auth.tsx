"use client";
import type { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/clerk-react";

const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export function AuthProvider({ children }: PropsWithChildren) {
  if (!key) return children;
  return (
    <ClerkProvider
      publishableKey={key}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
      appearance={{
        variables: {
          colorPrimary: "#007acc",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}

export function AuthEnabled({ children }: PropsWithChildren) {
  if (!key) return null;
  return children;
}

export function AuthDisabled({ children }: PropsWithChildren) {
  if (key) return null;
  return children;
}
