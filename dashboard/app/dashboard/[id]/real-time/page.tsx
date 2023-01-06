import Panel from "./Panel";

const RealTimePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <Panel id={id} />;
};

export default RealTimePage;
