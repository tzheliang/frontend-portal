export default function Footer({ footerText }: { footerText: string }) {
  return (
    <div className="flex flex-row flex-auto w-full h-full p-4 justify-between bg-blue-700">
      <p className="invert font-semibold">{footerText}</p>
      <p className="invert font-semibold">Copyright &copy; 2024</p>
    </div>
  );
}
