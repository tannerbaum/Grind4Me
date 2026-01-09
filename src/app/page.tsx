import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl">Home Page</h2>
      <Link href="/tickets" className="text-blue-500 hover:underline">
        View Tickets
      </Link>
    </div>
  );
}
