import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import logo2 from '../assets/images/Logo2.png';
import logosvg from '../assets/images/logo-svg.svg';
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavigation = (page) => {
        let path = "/";
        if (page === "About Us") path = "/about";
        if (page === "What We Offer Us") path = "/what-we-offer";
        if (page === "Performance") path = "/performance";
        if (page === "Insights") path = "/Insight";

        navigate(path);
        setMobileOpen(false); // Close drawer after navigation (on mobile)
    };

    const navItems = ["About Us", "What We Offer Us", "Performance", "Insights"];
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const toolbar = document.querySelector('.css-yg49xf-MuiToolbar-root');
            if (toolbar) {
                if (window.scrollY > 10) {
                    toolbar.style.setProperty('min-height', '80px', 'important');
                } else {
                    toolbar.style.setProperty('min-height', '150px', 'important');
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (


        <AppBar position="fixed" sx={{ paddingX: { xs: 2, md: 10 }, zIndex: 1100, }}>
            <Toolbar sx={{ justifyContent: "space-between", }} className="mt-4">

                <a href="/">
                    <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }} className="nav-logo">
                        <img src={logosvg} alt="Logo" />
                    </Typography>

                </a>
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                    {navItems.map((item) => (
                        <Button className="navs-item" key={item} sx={{ color: "#fff", fontSize: "1rem" }} onClick={() => handleNavigation(item)}>
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* LOGIN & GET STARTED (HIDDEN ON MOBILE) */}
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
                    <Button className="navs-item" sx={{ color: "#fff", fontSize: "1rem" }}>Login</Button>
                    <Button className="navs-btn navs-item" sx={{ color: "#fff", borderRadius: "20px", paddingX: 3, fontSize: "1rem" }}>
                        Get Started
                    </Button>
                </Box>

                <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>


            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    {navItems.map((item) => (
                        <ListItem button key={item} onClick={() => handleNavigation(item)}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                    <ListItem button onClick={handleDrawerToggle}>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <center>
                        <ListItem className="navb-btn" button sx={{ backgroundColor: "#A1624D", color: "#fff", borderRadius: "10px", textAlign: "center", width: '200px' }}>
                            <ListItemText primary="Get Started" />
                        </ListItem>
                    </center>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
