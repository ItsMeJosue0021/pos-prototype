"use client"

import Link from "next/link";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
    IoHomeOutline,
    IoMenuOutline,
    IoCartOutline,
    IoSettingsOutline
} from "react-icons/io5";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GoGraph } from "react-icons/go";
import { MdOutlineInventory } from "react-icons/md";

const navigationLinks = [
    { label: "Dashboard", href: "/dashboard", icon: <IoHomeOutline size={20} /> },
    { label: "Sales", href: "/sales", icon: <GoGraph size={20} /> },
    { label: "Iventory", href: "/inventory", icon: <MdOutlineInventory  size={20} /> },
    { label: "Settings", href: "/settings", icon: <IoSettingsOutline size={20} /> }
];

const PointOfSaleHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
    const isNotificationMenuOpen = Boolean(notificationAnchor);

    return (
        <div className="fixed top-0 left-0 w-full p-4 flex items-center justify-between bg-white border-b border-gray-200 z-40">
            <div className="flex items-center bg-blue-700 rounded-tl-md rounded-br-md">
                <div className="scale-75 flex items-center gap-2 ">
                    <p className=" font-bold text-white text-xl py-1 px-2  border-blue-600">SOXIO</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <IconButton
                    onClick={(e) => setNotificationAnchor(e.currentTarget)}
                    className="w-10 h-10 rounded hover:bg-blue-50 flex items-center justify-center group cursor-pointer">
                    <IoMdNotificationsOutline
                        size={35}
                        className="text-gray-600 group-hover:text-blue-700" />
                </IconButton>
                <IconButton
                    onClick={() => setIsDrawerOpen(true)}
                    className="w-10 h-10 rounded hover:bg-blue-50 flex items-center justify-center group cursor-pointer">
                    <IoMenuOutline
                        size={35}
                        className="text-gray-600 group-hover:text-blue-700" />
                </IconButton>
            </div>

            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <div className="w-64" role="presentation">
                    <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-lg font-semibold text-gray-800">Navigation</p>
                        <p className="text-sm text-gray-500">Dashboards & pages</p>
                    </div>

                    <List>
                        {navigationLinks.map((link) => (
                            <ListItem key={link.href} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={link.href}
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="hover:bg-blue-50">
                                    <ListItemIcon className="min-w-0 mr-3 text-gray-600">
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider />
                </div>
            </Drawer>

            <Menu
                anchorEl={notificationAnchor}
                open={isNotificationMenuOpen}
                onClose={() => setNotificationAnchor(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{ sx: { width: 320 } }}
            >
                <div className="px-4 py-3 border-b border-gray-200">
                    <Typography variant="subtitle1" className="!font-semibold text-gray-800">
                        Notifications
                    </Typography>
                    <Typography variant="body2" className="text-gray-500">
                        Recent updates
                    </Typography>
                </div>
                <MenuItem>
                    <div className="flex flex-col gap-1">
                        <Typography variant="body2" className="text-gray-800">
                            New order received
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                            2 minutes ago
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="flex flex-col gap-1">
                        <Typography variant="body2" className="text-gray-800">
                            Inventory low for Item #123
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                            10 minutes ago
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="flex flex-col gap-1">
                        <Typography variant="body2" className="text-gray-800">
                            Daily sales report is ready
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                            30 minutes ago
                        </Typography>
                    </div>
                </MenuItem>
                <div className="px-4 py-3 border-t border-gray-200">
                    <Typography
                        variant="body2"
                        className="text-blue-700 font-semibold cursor-pointer"
                        onClick={() => setNotificationAnchor(null)}
                    >
                        View all notifications
                    </Typography>
                </div>
            </Menu>
        </div>
    )
}

export default PointOfSaleHeader;
