import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Hello there 👋</p>
        <h1>Welcome to your autonomous Next.js starter.</h1>
        <p className="lede">
          This page was generated automatically. Use it as a launchpad for new
          ideas, experiments, or quick prototypes—everything is set up and ready
          to deploy.
        </p>
        <div className="actions">
          <Link href="https://nextjs.org/docs" className="button primary">
            Explore Next.js Docs
          </Link>
          <Link href="https://vercel.com/docs" className="button">
            Learn about Vercel
          </Link>
        </div>
      </section>
      <footer>
        <span>Built with ❤️ for rapid iteration.</span>
      </footer>
    </main>
  );
}
