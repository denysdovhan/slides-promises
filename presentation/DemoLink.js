import React from "react";
import { Link } from "spectacle";

const DemoLink = ({ href, children }) => (
  <Link
    href={`https://github.com/denysdovhan/slides-promises/blob/master/demos/${href}`}
    textColor="primary"
    target="_blank"
    caps
  >{children || "Демо"}</Link>
);

export default DemoLink;
