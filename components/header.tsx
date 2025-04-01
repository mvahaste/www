import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/75 sticky top-0 z-50 flex h-16 w-full flex-row items-center border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center gap-3">
          <Image
            src="https://github.com/mvahaste.png"
            alt="Avatar image from GitHub"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="font-bold">mvahaste</h1>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
