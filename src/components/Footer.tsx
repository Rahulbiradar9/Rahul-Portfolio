export function Footer() {
  return (
    <footer className="py-8 border-t border-black/5 dark:border-white/10 bg-background text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm font-medium text-muted-foreground">
          © {new Date().getFullYear()} Rahul. Built with Next.js, Tailwind CSS & Framer Motion. <br className="md:hidden" />
          Designed with ❤️ inspired by Anti-gravity aesthetics.
        </p>
      </div>
    </footer>
  );
}
