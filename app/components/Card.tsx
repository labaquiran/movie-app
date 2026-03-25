export default function Card({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return <div className="bg-white text-gray-800 shadow-md">{children}</div>;
}
