import * as React from "react"

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, asChild, ...props }, ref) => {
    if (asChild) {
      return React.Children.only(children as React.ReactElement)
    }

    return (
      <span
        ref={ref}
        {...props}
        className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0"
      >
        {children}
      </span>
    )
  }
)
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }

