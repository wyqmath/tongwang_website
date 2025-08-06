import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 md:ml-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Tong Wang Research Group. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
          <div className="flex flex-col items-center space-y-1 md:items-start">
            <span className="text-sm font-medium text-muted-foreground">Useful Links</span>
            <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-4 md:flex-row">
              <Link
                href="https://www.tsinghua.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Tsinghua University
              </Link>
              <Link
                href="https://www.frcbs.tsinghua.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Beijing Frontier Research Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
