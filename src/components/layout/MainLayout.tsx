import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="ml-72">
        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}