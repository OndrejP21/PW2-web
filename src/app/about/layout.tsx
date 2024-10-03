export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Toto je navbar <div>{children}</div>
    </div>
  );
}
