import Link from "next/link";
import { ReactElement, ComponentProps, ForwardedRef, forwardRef } from "react";

export type GenericButtonProps = ComponentProps<"button"> & ComponentProps<"a">;

const GenericButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, GenericButtonProps>(
  ({ href, type, ...props }: GenericButtonProps, ref): ReactElement => {
    if (href && !props.disabled) {
      const to = { pathname: href };
      return href.startsWith("/") ? (
        <Link href={to}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,@typescript-eslint/no-explicit-any */}
          <a ref={ref as any} {...props} />
        </Link>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-has-content,@typescript-eslint/no-explicit-any
        <a ref={ref as any} href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        // eslint-disable-next-line react/button-has-type
        type={type}
        {...props}
      />
    );
  },
);

export default GenericButton;
