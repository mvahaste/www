import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid flex-grow place-items-center">
      <div className="mb-12 text-center">
        <h2 className="text-xl font-bold">404</h2>
        <p className="text-muted-foreground text-sm">
          The page you are looking for does not exist.
        </p>
        <Button className="mt-6 cursor-pointer" variant="secondary" asChild>
          <Link href="/">Back to safety</Link>
        </Button>
      </div>
    </div>
  );
}
