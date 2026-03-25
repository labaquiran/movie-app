export default function Card({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg shadow-md">
      {children}
    </div>
  );
}
