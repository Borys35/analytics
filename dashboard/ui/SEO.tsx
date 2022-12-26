import { FC } from "react";

interface Props {
  description?: string;
}

const SEO: FC<Props> = ({ description }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
    </>
  );
};

export default SEO;
