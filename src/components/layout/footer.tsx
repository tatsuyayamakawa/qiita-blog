import { siteConfig } from "@/lib/config";
import Link from "next/link";

const { title, description } = siteConfig;

export function Footer() {
  return (
    <footer className="border-t py-8 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <div>
            <nav>
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link href="/" className="hover:underline">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    プロフィール
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    プライバシー
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="text-xs text-muted-foreground mt-4 text-center md:text-right">
              &copy; {new Date().getFullYear()} {title}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
