import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
        <p className="text-sm text-muted-foregound">Your place to start</p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="text-blue-500 hover:underline">
          View Tickets
        </Link>
      </div>
    </div>
  );
}
