export default function Footer() {
  return (
    <footer className="text-muted-foreground w-full p-4 pt-10 text-center text-sm sm:pt-16">
      <p>
        View the source code on{" "}
        <a
          className="text-foreground font-semibold hover:underline"
          href="https://github.com/mvahaste/www"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
