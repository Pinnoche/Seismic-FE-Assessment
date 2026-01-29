export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[#47FFEE] bg-[#D1FFFB] px-6 py-3 text-sm text-primary cursor-default">
      {children}
    </div>
  );
}
