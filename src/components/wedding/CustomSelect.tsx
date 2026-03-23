import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const CustomSelect = React.forwardRef<HTMLDivElement, CustomSelectProps>(
  ({ value, onChange, options, placeholder = "Select", label, required = false }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);
    const displayValue = selectedOption?.label || placeholder;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
      <div ref={ref} className="relative w-full">
        {label && (
          <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
            {label}
            {required && <span className="text-destructive">*</span>}
          </label>
        )}
        <div ref={containerRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-full px-4 py-3 text-left font-body text-sm bg-background border-2 rounded-lg",
              "transition-all duration-200 cursor-pointer flex items-center justify-between",
              "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              isOpen
                ? "border-primary bg-primary/5"
                : "border-border text-foreground",
              !value && "text-muted-foreground/60"
            )}
          >
            <span>{displayValue}</span>
            <svg
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {isOpen && (
            <div
              ref={dropdownRef}
              className={cn(
                "absolute top-full left-0 right-0 mt-1 bg-background border-2 border-primary rounded-lg shadow-lg z-50",
                "py-1 max-h-48 overflow-y-auto"
              )}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-3 text-left text-sm transition-colors duration-150",
                    "font-body hover:bg-primary/10",
                    value === option.value
                      ? "bg-primary/20 text-primary font-semibold border-l-2 border-primary"
                      : "text-foreground"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

CustomSelect.displayName = "CustomSelect";

export { CustomSelect };
