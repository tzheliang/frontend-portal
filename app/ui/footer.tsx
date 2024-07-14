export default function Footer({ footerText }: { footerText: string }) {
  return (
    <div className="flex flex-row flex-auto w-full h-full p-4 justify-between bg-gray-100">
      <p>{footerText}</p>
      <p>Copyright &copy; 2024</p>
    </div>
  );
}
