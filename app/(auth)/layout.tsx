import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return <div className="bg-black-100">{children}</div>;
}
