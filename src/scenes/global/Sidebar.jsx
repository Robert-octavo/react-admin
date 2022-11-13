import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarCharOutlinedIcon from "@mui/icons-material/BarCharOutlined";
import PieCharOutlineOutlinedIcon from "@mui/icons-material/PieCharOutlineOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIscollapse] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    
    return <div>Sidebar</div>
}

export default Sidebar;