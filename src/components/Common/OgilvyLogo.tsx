import React from "react";
import { Link } from "react-router-dom";
import { LOGO_SIZE } from "../../constants";

import logoLarge from "../../assets/logo-icons/logo-large.svg";
import logoSmall from "../../assets/logo-icons/logo-small.svg";

type TLogo = {
  size: "l" | "s";
};

export default function OgilvyLogo({ size = LOGO_SIZE.S }: TLogo) {
  return (
    <Link to="/">
      <img
        src={size === LOGO_SIZE.L ? logoLarge : logoSmall}
        alt="application logo"
      />
    </Link>
  );
}
