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
  LucideMoon,
  LucidePalette,
  LucideSun,
  LucideTreePine,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ICON_SIZE = 16;

interface ThemeOption {
  value: string;
  label: string;
  icon: React.ElementType;
}

const modeOptions: ThemeOption[] = [
  { value: "light", label: "Light", icon: LucideSun },
  { value: "dark", label: "Dark", icon: LucideMoon },
];

const colorOptions: ThemeOption[] = [
  { value: "coffee", label: "Coffee", icon: LucideCoffee },
  { value: "forest", label: "Forest", icon: LucideTreePine },
];

const defaultMode = modeOptions[0].value;
const defaultColor = colorOptions[0].value;

export const defaultTheme: string = `${defaultColor}-${defaultMode}`;

export const availableThemes: string[] = colorOptions.flatMap((color) =>
  modeOptions.map((mode) => `${color.value}-${mode.value}`),
);

const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

export const ThemeModeSwitcher = () => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  const [color, mode] = (resolvedTheme ?? defaultTheme).split("-");

  const currentIndex = modeOptions.findIndex((opt) => opt.value === mode);

  const nextOption = modeOptions[(currentIndex + 1) % modeOptions.length];

  const handleToggle = () => setTheme(`${color}-${nextOption.value}`);

  return (
    <Button
      size="icon"
      variant="ghost"
      className="cursor-pointer"
      onClick={handleToggle}
      title={`Switch to ${nextOption.label} mode`}
    >
      <nextOption.icon size={ICON_SIZE} />
    </Button>
  );
};

interface DropdownSwitcherProps {
  value: string;
  onChange: (value: string) => void;
  options: ThemeOption[];
  icon?: React.ElementType;
  triggerTitle?: string;
}

const DropdownSwitcher = ({
  value,
  onChange,
  options,
  icon: TriggerIcon = LucidePalette,
  triggerTitle = "Switch theme",
}: DropdownSwitcherProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="cursor-pointer"
          title={triggerTitle}
        >
          <TriggerIcon size={ICON_SIZE} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map(({ value, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={value}
              className="flex cursor-pointer gap-2"
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

export const ThemeColorSwitcher = () => {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  const [color, mode] = (resolvedTheme ?? defaultTheme).split("-");
  const handleChange = (value: string) => setTheme(`${value}-${mode}`);

  return (
    <DropdownSwitcher
      value={color}
      onChange={handleChange}
      options={colorOptions}
      triggerTitle="Change theme color"
    />
  );
};
