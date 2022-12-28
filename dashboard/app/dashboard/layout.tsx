const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`py-4 px-6 lg:py-8 lg:px-12 min-h-screen max-w-screen-2xl flex flex-col md:grid md:grid-cols-12 gap-8 overflow-visible`}
    >
      {children}
    </div>
  );
};

export default DashboardLayout;
