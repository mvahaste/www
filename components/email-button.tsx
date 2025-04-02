"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";
import { LucideCopy, LucideExternalLink, LucideMailOpen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SiMaildotru } from "react-icons/si";
import ContactForm from "./contact-form";

interface EmailButtonProps {
  email: string;
  className?: string;
}

export default function EmailButton({ email, className }: EmailButtonProps) {
  const [copyText, setCopyText] = useState("Copy to clipboard");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

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
          <DropdownMenuItem
            onClick={() => setIsContactFormOpen(true)}
            className="hover:cursor-pointer"
          >
            <LucideMailOpen className="text-foreground" />
            <span>Open contact form</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ContactForm
        isOpen={isContactFormOpen}
        setIsOpenAction={setIsContactFormOpen}
      />
    </>
  );
}
