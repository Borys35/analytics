const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <>Heeej {id}</>;
};

export default PropertyPage;
