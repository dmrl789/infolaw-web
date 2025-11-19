import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-900 to-brand flex items-center justify-center text-white font-semibold">
        IL
      </div>
      <div>
        <p className="text-lg font-heading tracking-wide text-slate-900">InfoLAW</p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">IPN Native</p>
      </div>
    </Link>
  );
}
