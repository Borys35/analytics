import StatsItem from "@/ui/dashboard/property/StatsItem";

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <StatsItem
        count="34532"
        title="pages viewed"
        variant="primary"
        className="lg:col-span-2"
      />
      <StatsItem count="34532" title="pages viewed" />
      <StatsItem count="34532" title="pages viewed" />
      <StatsItem count="34532" title="pages viewed" />
      <StatsItem count="34532" title="pages viewed" variant="error" />
    </div>
  );
};

export default PropertyPage;
