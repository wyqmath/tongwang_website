import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Tong Wang Research Group. All rights reserved.
          </p>

          {/* Contact and Affiliations */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {/* Contact Section */}
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-foreground mb-2">Contact</h4>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Affiliations Section */}
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-foreground mb-2">Affiliations</h4>
              <div className="flex flex-col space-y-1">
                <Link
                  href="https://www.tsinghua.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tsinghua University
                </Link>
                <Link
                  href="https://www.frcbs.tsinghua.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beijing Frontier Research Center for Biological Structure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
