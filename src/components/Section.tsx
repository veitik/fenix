import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerClassName, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
