
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen p-3 sm:p-4">
      {/* Mobile header */}
      <header className="mb-3 flex items-center gap-3 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg border border-stone-300 p-2 hover:bg-stone-200"
          aria-label="Open sidebar"
        >
          <FiMenu size={22} />
        </button>
      </header>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="grid grid-cols-1 gap-4 lg:grid-cols-[230px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50
            w-64 overflow-y-auto bg-stone-100 p-3 shadow-xl
            transition-transform duration-300
            ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }
            lg:translate-x-0
            lg:left-4 lg:top-4 lg:bottom-4
            lg:w-[230px] lg:bg-transparent
            lg:p-0 lg:shadow-none
          `}
        >
          {/* Mobile close button */}
          <div className="mb-3 flex justify-end lg:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg border border-stone-300 p-2 hover:bg-stone-200"
              aria-label="Close sidebar"
            >
              <FiX size={22} />
            </button>
          </div>

          <Sidebar onClose={() => setSidebarOpen(false)} />
        </aside>

        {/* Dashboard */}
        <section className="min-w-0 lg:col-start-2">
          <Dashboard />
        </section>
      </main>
    </div>
  );
}

export default App;
