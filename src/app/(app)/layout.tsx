import { ShellLayout } from "@/components/shellLayout/shellLayout"

export default function Layout({ children }: { children: React.ReactNode }) {
	return <ShellLayout>{children}</ShellLayout>
}
