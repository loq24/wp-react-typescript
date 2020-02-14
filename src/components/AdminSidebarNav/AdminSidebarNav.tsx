import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import './AdminSidebarNav.css';

type SidebarNavProps = {
  pathName: string;
  basePath: string;
};

const SidebarNav: React.FC<SidebarNavProps> = ({ pathName, basePath }) => {
  return (
    <div className="sidebar-nav">
      <Nav variant="pills" className="flex-column">
        <NavItem
          toPath={basePath}
          linkText="Dashboard"
          curPathName={pathName}
          iconClass="fa-dashboard"
        />
        <NavItem
          toPath={`${basePath}/posts`}
          linkText="Posts"
          curPathName={pathName}
          iconClass="fa-newspaper-o"
        />
        <NavItem
          toPath={`${basePath}/add-new`}
          linkText="Add New"
          curPathName={pathName}
          iconClass="fa-file"
        />
        <NavItem
          toPath={`${basePath}/account`}
          linkText="Account Info"
          curPathName={pathName}
          iconClass="fa-info"
        />
      </Nav>
    </div>
  );
};

export default SidebarNav;
