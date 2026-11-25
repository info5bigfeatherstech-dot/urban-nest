"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomSelectOption<T = string | number | null> {
  label: string;
  value: T;
  badge?: string;
  sublabel?: string;
}

interface CustomSelectProps<T = string | number | null> {
  options: CustomSelectOption<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  align?: "left" | "right";
  icon?: React.ReactNode;
}

export function CustomSelect<T = string | number | null>({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className,
  disabled = false,
  align = "left",
  icon,
}: CustomSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key only when open
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (val: T) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-lg border border-border bg-white px-3.5 py-2 text-sm text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20",
          isOpen ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/50",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <div className="flex items-center gap-2 truncate text-left">
          {icon && <span className="text-primary shrink-0">{icon}</span>}
          <span className={cn("truncate font-medium", !selectedOption && "text-muted")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>

      {/* Smooth Animated Dropdown Menu */}
      {isOpen && (
        <div
          style={{ backgroundColor: "#ffffff" }}
          className={cn(
            "smooth-dropdown absolute z-50 mt-1.5 w-full min-w-[180px] max-h-64 overflow-y-auto rounded-xl border border-border bg-white p-1.5 shadow-lg custom-scrollbar",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          <div className="space-y-0.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={String(option.value ?? option.label)}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2 text-xs sm:text-sm rounded-lg transition-colors text-left",
                    isSelected
                      ? "bg-tint font-bold text-primary"
                      : "text-ink hover:bg-tint/60 hover:text-primary"
                  )}
                >
                  <div className="flex flex-col truncate pr-2">
                    <span className="truncate">{option.label}</span>
                    {option.sublabel && (
                      <span className="text-[10px] text-muted font-normal">
                        {option.sublabel}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {option.badge && (
                      <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold">
                        {option.badge}
                      </span>
                    )}
                    {isSelected && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
