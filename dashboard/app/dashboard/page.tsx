import Button from "@/ui/atoms/Button";
import MainPanel from "@/ui/dashboard/MainPanel";
import PropertyItem from "@/ui/dashboard/PropertyItem";
import Sidebar from "@/ui/dashboard/sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <Sidebar />
      <MainPanel title="Admin">
        <div className="flex flex-col gap-4">
          <Button className="self-start">Add property</Button>
          <PropertyItem id="1" name="Property 1" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 3" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 4" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 1" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 3" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 4" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 1" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 3" date={new Date().toString()} />
          <PropertyItem id="1" name="Property 4" date={new Date().toString()} />
        </div>
      </MainPanel>
    </>
  );
};

export default DashboardPage;
