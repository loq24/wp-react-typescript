import React from 'react';
import { Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import './AdminSidebarNav.css';

type SidebarNavProps = {
  pathName: string;
};

const SidebarNav: React.FC<SidebarNavProps> = ({ pathName }) => {
  return (
    <div className="sidebar-nav">
      <Nav variant="pills" className="flex-column">
        <NavItem
          toPath="/"
          linkText="Dashboard"
          curPathName={pathName}
          iconClass="fa-dashboard"
        />
        <NavItem
          toPath="/posts"
          linkText="Posts"
          curPathName={pathName}
          iconClass="fa-newspaper-o"
        />
        <NavItem
          toPath="/add-new"
          linkText="Add New"
          curPathName={pathName}
          iconClass="fa-file"
        />
        <NavItem
          toPath="/account"
          linkText="Account Info"
          curPathName={pathName}
          iconClass="fa-info"
        />
      </Nav>
    </div>
  );
};

export default SidebarNav;
