export function Footer() {
  return (
    <footer className="py-8 border-t border-black/5 dark:border-white/10 bg-background text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm font-medium text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Rahul Biradar
        </p>
      </div>
    </footer>
  );
}
