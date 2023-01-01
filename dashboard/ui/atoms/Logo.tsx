import FullLogo from "@/assets/full-logo.svg";
import SmallLogo from "@/assets/logo.svg";
import classNames from "classnames";
import { FC } from "react";

interface Props {
  smallOnly?: boolean;
}

const Logo: FC<Props> = ({ smallOnly = false }) => {
  return (
    <>
      <SmallLogo className={classNames("h-8", { "md:hidden": !smallOnly })} />
      <FullLogo
        className={classNames("h-8 hidden", { "md:block": !smallOnly })}
      />
    </>
  );
};

export default Logo;
