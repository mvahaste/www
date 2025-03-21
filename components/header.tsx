import { ThemeSwitcher } from "./theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/75 sticky top-0 z-50 flex h-16 w-full flex-row items-center border-b backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-4xl flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/mvahaste.png" />
            <AvatarFallback className="text-xs">MV</AvatarFallback>
          </Avatar>
          <h1 className="font-bold">mvahaste</h1>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
