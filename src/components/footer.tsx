"use client";

export default function Footer() {
  const today = new Date();
  return (
    <div className="no-print mt-auto mb-5 flex flex-col items-center justify-center pt-10 text-center text-sm">
      <div className="pb-4">
        <a
          href="/"
          className="flex flex-row justify-center text-center font-bold text-sm"
        >
          &copy; {today.getFullYear()} comboom.sucht
        </a>
      </div>
      <div className="flex flex-row items-center justify-center pb-4 text-center text-sm">
        <a href="/" className="font-bold">
          comboom.sucht
        </a>{" "}
        |
        <a href="/impressum" className="font-bold">
          Impressum
        </a>
      </div>
    </div>
  );
}
