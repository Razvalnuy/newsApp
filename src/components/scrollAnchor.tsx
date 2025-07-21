"use client"

import { Spin } from "antd"

interface ScrollAnchorProps {
	ref: (node?: Element | null) => void
	isLoading: boolean
	className?: string
}

export function ScrollAnchor({ ref, isLoading, className }: ScrollAnchorProps) {
	return (
		<div ref={ref} className={className || "scroll-anchor"}>
			{isLoading && <Spin />}
		</div>
	)
}
