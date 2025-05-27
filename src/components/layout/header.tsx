import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">
            {siteConfig.title}
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Button asChild variant="ghost">
                <Link href="/about">プロフィール</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
