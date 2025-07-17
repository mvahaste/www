"use client";

import { cn } from "@/lib/utils";
import { LucideCopy, LucideExternalLink } from "lucide-react";
import { useState } from "react";
import { SiMaildotru } from "react-icons/si";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface EmailButtonProps {
  email: string;
  className?: string;
}

export default function EmailButton({ email, className }: EmailButtonProps) {
  const [copyText, setCopyText] = useState("Copy to clipboard");

  const copy = () => {
    navigator.clipboard.writeText(email);
    setCopyText("Copied to clipboard!");
    setTimeout(() => setCopyText("Copy to clipboard"), 1000);
  };

  const open = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className={cn(
              "flex items-center gap-2 hover:cursor-pointer",
              className,
            )}
          >
            <SiMaildotru />
            Email
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-content" align="start">
          <DropdownMenuItem onClick={copy} className="hover:cursor-pointer">
            <LucideCopy className="text-foreground" />
            <span>{copyText}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={open} className="hover:cursor-pointer">
            <LucideExternalLink className="text-foreground" />
            <span>Open in email client</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
