import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

type SidebarNavProps = {
	pathName: string;
	basePath: string;
};

const SidebarNav: React.FC<SidebarNavProps> = ({ pathName, basePath }) => {
	return (
		<div className="sidebar-nav">
			<Nav variant="pills" className="flex-column">
				<Link
					to={basePath}
					className={pathName === basePath ? `nav-link active` : `nav-link`}
				>
					<i className="fa fa-fw fa-dashboard" /> <span>Dashboard</span>
				</Link>
				<Link
					to={`${basePath}posts`}
					className={
						pathName === `${basePath}posts` ? `nav-link active` : `nav-link`
					}
				>
					<i className="fa fa-fw fa-newspaper-o" /> <span>Posts</span>
				</Link>
				<Link
					to={`${basePath}add-new`}
					className={
						pathName === `${basePath}add-new` ? `nav-link active` : `nav-link`
					}
				>
					<i className="fa fa-fw fa-file" /> <span>Add New</span>
				</Link>
				<Link
					to={`${basePath}account`}
					className={
						pathName === `${basePath}account` ? `nav-link active` : `nav-link`
					}
				>
					<i className="fa fa-fw fa-info" /> <span>Account Info</span>
				</Link>
			</Nav>
		</div>
	);
};

export default SidebarNav;
