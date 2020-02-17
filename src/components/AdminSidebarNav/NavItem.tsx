import React from 'react';
import { Link } from 'react-router-dom';

type NavItemProps = {
  curPathName: string;
  toPath: string;
  linkText: string;
  iconClass: string;
};

const NavItem: React.FC<NavItemProps> = ({
  curPathName,
  toPath,
  linkText,
  iconClass
}) => {
  return (
    <Link
      to={toPath}
      className={curPathName === toPath ? `nav-link active` : `nav-link`}
    >
      <i className={`fa fa-fw ${iconClass}`} /> <span>{linkText}</span>
    </Link>
  );
};

export default NavItem;
