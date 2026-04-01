import Link from 'next/link';

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-4 text-center">
        <h1 className="text-3xl font-semibold">Password reset</h1>
        <p>This static build uses local-only data, so password reset is not required.</p>
        <Link href="/login" className="inline-block bg-black text-white px-5 py-3 rounded-lg">Back to login</Link>
      </div>
    </div>
  );
}
