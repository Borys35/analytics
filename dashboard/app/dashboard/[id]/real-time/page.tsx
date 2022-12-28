import RealTimeItem from "@/ui/dashboard/property/RealTimeItem";

const RealTimePage = () => {
  return (
    <div className="flex flex-col gap-12 items-center relative">
      <div className="-z-10 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-r-2 border-neutral-700"></div>
      <RealTimeItem name="session_start" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="event" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="event" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="event" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="page_view" date={new Date().toString()} />
      <RealTimeItem name="event" date={new Date().toString()} />
    </div>
  );
};

export default RealTimePage;
