export const metadata = {
  title: "Sanity Studio - Content Management",
  description: "Content management system for the site",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
