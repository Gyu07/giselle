import { Button } from "@/components/ui/button";
import { settingsV2Flag } from "@/flags";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { FC, PropsWithChildren } from "react";

type SubmitAction = {
	href?: never;
	component?: never;
	content: string;
	onAction: () => void;
};
type LinkAction = {
	onAction?: never;
	component?: never;
	content: string;
	href: string;
};
type CustomComponentAction = {
	component: React.ReactNode;
	onAction?: never;
	href?: never;
};
type Action = SubmitAction | LinkAction | CustomComponentAction;
type CardProps = {
	title: string;
	description?: string;
	action?: Action;
	className?: string;
	settingsV2Mode?: boolean;
};

export function Card({
	title,
	description,
	action,
	children,
	className,
	settingsV2Mode,
}: PropsWithChildren<CardProps>) {
	if (settingsV2Mode) {
		return (
			<div
				className={cn(
					"bg-transparent rounded-[8px] border-[0.5px] border-black-400 px-[24px] pt-[16px] pb-[24px] w-full gap-[16px] grid",
					className,
				)}
			>
				<div className="flex justify-between gap-x-2.5">
					<div className="grid gap-[3px] font-medium">
						<h2 className="text-white-400 text-[16px] leading-[27.2px] tracking-normal font-hubotSans">
							{title}
						</h2>
						{description && (
							<p className="text-black-400 text-[12px] leading-[20.4px] tracking-normal font-geist">
								{description}
							</p>
						)}
					</div>
					{action && (
						<div>
							{action.onAction != null && (
								<form action={action.onAction}>
									<Button type="submit">{action.content}</Button>
								</form>
							)}
							{action.href != null && (
								<Button asChild>
									<Link href={action.href}>{action.content}</Link>
								</Button>
							)}
							{action.component != null && action.component}
						</div>
					)}
				</div>
				{children}
			</div>
		);
	}

	return (
		<div
			className={cn(
				"bg-transparent rounded-[16px] border border-black-70 py-[16px] px-[24px] w-full gap-[16px] grid",
				className,
			)}
		>
			<div className="flex justify-between">
				<div className="grid gap-[3px] font-avenir">
					<h2 className="text-black-30 text-[16px]">{title}</h2>
					{description && (
						<p className="text-[12px] text-black-70">{description}</p>
					)}
				</div>
				{action && (
					<div>
						{action.onAction != null && (
							<form action={action.onAction}>
								<Button type="submit">{action.content}</Button>
							</form>
						)}
						{action.href != null && (
							<Button asChild>
								<Link href={action.href}>{action.content}</Link>
							</Button>
						)}
						{action.component != null && action.component}
					</div>
				)}
			</div>
			{children}
		</div>
	);
}
