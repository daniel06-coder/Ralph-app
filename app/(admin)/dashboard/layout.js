import { BookProvider } from "@/context/BookContext";
import AdminNavbar from "./components/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <AdminNavbar />
          <main className="flex-1 ml-64 p-6">
            <BookProvider>{children}</BookProvider>
          </main>
          {/* No footer */}
        </div>
      </body>
    </html>
  );
}
