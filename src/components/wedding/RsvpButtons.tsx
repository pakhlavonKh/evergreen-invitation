import React from "react";
import { cn } from "@/lib/utils";

interface RsvpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accept" | "decline" | "submit" | "secondary";
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
}

const RsvpButtons = React.forwardRef<HTMLButtonElement, RsvpButtonProps>(
  ({ className, variant = "submit", size = "md", isActive = false, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-body tracking-[0.15em] uppercase rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border";

    const sizeStyles = {
      sm: "px-4 py-2 text-xs min-w-fit",
      md: "px-6 py-3 text-sm min-w-fit",
      lg: "px-8 py-4 text-base",
    }[size];

    const variantStyles = {
      accept: cn(
        "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent/50",
        "after:absolute after:inset-0 after:rounded-lg after:transition-all after:duration-300",
        isActive && "bg-accent text-accent-foreground border-accent shadow-[0_4px_12px_rgba(107,114,74,0.15)] font-semibold after:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
      ),
      decline: cn(
        "bg-muted/10 text-muted-foreground border-muted/30 hover:bg-muted/20 hover:border-muted/50",
        "after:absolute after:inset-0 after:rounded-lg after:transition-all after:duration-300",
        isActive && "bg-muted text-foreground border-muted shadow-[0_4px_12px_rgba(107,114,74,0.1)] font-semibold after:shadow-[inset_0_1px_0_rgba(0,0,0,0.05)]",
      ),
      submit: cn(
        "bg-primary text-primary-foreground border-primary font-semibold",
        "hover:bg-primary/90 shadow-[0_2px_8px_rgba(107,114,74,0.2)]",
        "hover:shadow-[0_4px_12px_rgba(107,114,74,0.3)]",
        "active:shadow-[0_1px_4px_rgba(107,114,74,0.15)]",
      ),
      secondary: cn(
        "bg-background text-foreground border-border hover:bg-secondary/50 hover:border-border/80",
      ),
    }[variant];

    return (
      <button className={cn(baseStyles, sizeStyles, variantStyles, className)} ref={ref} {...props} />
    );
  },
);

RsvpButtons.displayName = "RsvpButtons";

export { RsvpButtons };
