"use client"

export default function Footer() {
  const today = new Date();
  return (
    <div className="flex flex-col text-center items-center justify-center mt-auto text-sm mb-5 pt-10 no-print">
      <div className="pb-4">
        <a href="/" className="flex flex-row justify-center text-center text-sm font-bold">
          &copy; {today.getFullYear()} comboom.sucht
        </a>
      </div>
      <div className="flex flex-row justify-center items-center text-center text-sm pb-4">
        <a href="/" className="font-bold">comboom.sucht</a> |
        <a href="/impressum" className="font-bold">Impressum</a>
      </div>
    </div>
  );
}
