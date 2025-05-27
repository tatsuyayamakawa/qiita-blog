import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

const { title } = siteConfig;

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">
            {title}
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
