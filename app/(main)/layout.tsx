import Sidebar from "@/components/sections/side-bar";

export default function layout({
  children,
} : {
  children: React.ReactNode;
}) {
  const sidebarLg = "lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24";
  const contentLg = "lg:w-[52%] pt-24 lg:py-24";
  return (
    <div className="min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 mx-auto flex justify-center items-start">
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        <header className={sidebarLg}>
          <Sidebar />
        </header>
        {/* Main Content */}
        <main className={contentLg}>
          {children}
        </main>
      </div>
    </div>
  )
};
