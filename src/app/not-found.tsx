import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-100 min-h-screen flex-col items-center justify-center p-24">
      <h1>404 | Not found</h1>
      <Link href="/">Home</Link>
    </main>
  );
}
