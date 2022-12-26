import SEO from "@/ui/SEO";
import { formatTitle } from "@/util/formatTitle";

const Head = () => {
  return (
    <>
      <SEO description="Trakker is a tool for analytics" />
      <title>{formatTitle()}</title>
    </>
  );
};

export default Head;
