export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <header className="p-4 bg-blue-600 text-white font-semibold">
          My Next.js App

          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </header>

        <main>{children}</main>

        <footer className="p-4 text-center text-sm text-gray-500">
          © 2025 My App
        </footer>
      </body>
    </html>
  );
}