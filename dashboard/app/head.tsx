import SEO from "@/ui/SEO";
import { formatTitle } from "@/util/formatTitle";

const Head = () => {
  return (
    <>
      <SEO description="Trakker is a tool for analytics" />
      <title>{formatTitle()}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
        rel="stylesheet"
        precedence="default"
      />
    </>
  );
};

export default Head;
