import AnimatedAvatar from "./animated-avatar";
import HeaderNav from "./header-nav";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  return (
    <header className="bg-background supports-[backdrop-filter]:bg-background/75 sticky top-0 z-50 flex h-16 w-full flex-row items-center border-b backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center gap-3">
          <AnimatedAvatar />
          <h1 className="font-bold antialiased">mvahaste</h1>
        </div>
        <div className="flex flex-row items-center gap-4">
          <HeaderNav />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
