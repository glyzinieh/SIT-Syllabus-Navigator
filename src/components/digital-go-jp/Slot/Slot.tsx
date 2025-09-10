import {
	Children,
	type HTMLAttributes,
	type ReactNode,
	cloneElement,
	isValidElement,
} from "react";

type SlotProps = HTMLAttributes<HTMLElement> & {
	children?: ReactNode;
};

export const Slot = (props: SlotProps) => {
	const { children, ...rest } = props;

	// https://react.dev/reference/react/isValidElement
	// https://react.dev/reference/react/cloneElement
	if (isValidElement(children)) {
		// Treat the child as a ReactElement and narrow its props to include
		// an optional className so we can safely read it.
		const child = children as React.ReactElement<Record<string, unknown>>;
		const childProps = child.props as { className?: string } & Record<
			string,
			unknown
		>;

		const mergedClassName = `${rest.className ?? ""} ${
			childProps.className ?? ""
		}`.trim();

		const mergedProps: Partial<Record<string, unknown>> &
			HTMLAttributes<HTMLElement> = {
			...(rest as Record<string, unknown>),
			className: mergedClassName,
		};

		return cloneElement(child, mergedProps);
	}

	if (Children.count(children) > 1) {
		Children.only(null);
	}

	return null;
};
