"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 border hover:cursor-pointer"
        >
          {theme === "light" ? (
            <Sun key="light" size={ICON_SIZE} />
          ) : theme === "dark" ? (
            <Moon key="dark" size={ICON_SIZE} />
          ) : (
            <Laptop key="system" size={ICON_SIZE} />
          )}
          <span>
            {theme?.substring(0, 1).toUpperCase().concat(theme?.substring(1)) ??
              "Theme"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-content text-muted-foreground"
        align="start"
      >
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          <DropdownMenuRadioItem
            className="flex gap-2 hover:cursor-pointer"
            value="light"
          >
            <Sun size={ICON_SIZE} /> <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="flex gap-2 hover:cursor-pointer"
            value="dark"
          >
            <Moon size={ICON_SIZE} /> <span>Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="flex gap-2 hover:cursor-pointer"
            value="system"
          >
            <Laptop size={ICON_SIZE} /> <span>System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
