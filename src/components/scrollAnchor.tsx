"use client"

import { Spin } from "antd"
import { CSSProperties } from "react"

interface ScrollAnchorProps {
	ref: (node?: Element | null) => void
	isLoading: boolean
	className?: string
}

export function ScrollAnchor({ ref, isLoading, className }: ScrollAnchorProps) {
	const spinStyle: CSSProperties = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "24px 0",
		height: "100px",
	}

	return (
		<div ref={ref} className={className || "scroll-anchor"}>
			{isLoading && (
				<div style={spinStyle}>
					<Spin size="large" />
				</div>
			)}
		</div>
	)
}
