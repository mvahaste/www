"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LucideCoffee,
  LucideLaptop,
  LucideMoon,
  LucideSun,
  LucideTreePine,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ICON_SIZE = 16;

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted;
};

const modeOptions = [
  { value: "light", label: "Light", icon: LucideSun },
  { value: "dark", label: "Dark", icon: LucideMoon },
];

const colorOptions = [
  { value: "forest", label: "Forest", icon: LucideTreePine },
  { value: "coffee", label: "Coffee", icon: LucideCoffee },
];

const defaultMode = modeOptions[0].value;
const defaultColor = colorOptions[0].value;

export const defaultTheme = `${defaultColor}-${defaultMode}`;
export const availableThemes = [
  ...colorOptions.flatMap((color) =>
    modeOptions.map((mode) => `${color.value}-${mode.value}`),
  ),
];

interface ThemeSwitcherProps {
  type: "mode" | "color";
  options: {
    value: string;
    label: string;
    icon: React.ElementType;
  }[];
}

const ThemeSwitcher = ({ type, options }: ThemeSwitcherProps) => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  const [color, mode] = (resolvedTheme ?? defaultTheme).split("-");

  const currentValue = type === "mode" ? mode : color;

  const handleChange = (value: string) => {
    const newTheme = type === "mode" ? `${color}-${value}` : `${value}-${mode}`;

    setTheme(newTheme);
  };

  const CurrentIcon =
    options.find((opt) => opt.value === currentValue)?.icon ?? LucideLaptop;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="flex items-center gap-2 border hover:cursor-pointer"
        >
          <CurrentIcon size={ICON_SIZE} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={currentValue}
          onValueChange={handleChange}
        >
          {options.map(({ value, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={value}
              className="flex gap-2 hover:cursor-pointer"
              value={value}
            >
              <Icon size={ICON_SIZE} /> <span>{label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ThemeModeSwitcher = () => (
  <ThemeSwitcher type="mode" options={modeOptions} />
);

const ThemeColorSwitcher = () => (
  <ThemeSwitcher type="color" options={colorOptions} />
);

export { ThemeModeSwitcher, ThemeColorSwitcher };
