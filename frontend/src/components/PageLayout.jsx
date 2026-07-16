import Sidebar from "./Sidebar";

export default function PageLayout({ children }) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        <aside className="order-1 w-full lg:col-span-4 lg:col-start-9 lg:order-2">
          <Sidebar />
        </aside>

        <div className="order-2 w-full space-y-8 lg:col-span-8 lg:col-start-1 lg:order-1">
          {children}
        </div>
      </div>
    </main>
  );
}