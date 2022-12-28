import Logo from "@/ui/atoms/Logo";
import MainPanel from "@/ui/dashboard/MainPanel";
import Sidebar from "@/ui/dashboard/sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <Sidebar />
      <MainPanel>
        <Logo />
      </MainPanel>
    </>
  );
};

export default DashboardPage;
