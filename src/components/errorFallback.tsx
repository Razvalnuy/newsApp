"use client"

interface ErrorFallbackProps {
	error?: string | null
	message?: string
	className?: string
}

export function ErrorFallback({
	error,
	message,
	className,
}: ErrorFallbackProps) {
	return (
		<div className={className || "error-fallback"}>
			Ошибка: {error || message}
		</div>
	)
}
