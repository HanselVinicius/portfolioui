import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-zinc-900">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight"
        >
          Vinicius Hansel
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link
            href="/projects"
            className="hover:text-zinc-100 transition-colors"
          >
            Projetos
          </Link>

          <Link
            href="/contact"
            className="hover:text-zinc-100 transition-colors"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}