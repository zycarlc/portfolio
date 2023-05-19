import * as React from "react"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"

import {
    Tabs,
    Tab,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
} from "@mui/material"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem"
import { Link, scroller } from "react-scroll"

const pages = ["About", "Projects", "Skills"]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [value, setValue] = React.useState(0)

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const scrollTo = position => {
        scroller.scrollTo(position, {
            duration: 200,
            delay: 0,
            smooth: "easeInOutQuart",
        })
    }

    const handleChange = (event, newValue) => {
        const position = pages[newValue].toLowerCase()
        // setValue(newValue)
        scrollTo(position)
    }

    return (
        <AppBar
            sx={{
                position: "fixed",
                top: "0",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        ZHENYU C
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        handleChange(page, index)
                                    }}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        ZHENYU C
                    </Typography>
                    <Tabs
                        value={value}
                        textColor="inherit"
                        indicatorColor="secondary"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                        onChange={handleChange}
                        centered
                    >
                        {pages.map((page, index) => (
                            <Tab
                                label={page}
                                value={index}
                                key={page}
                                sx={{ fontWeight: "900" }}
                            />
                        ))}
                    </Tabs>
                    <ul
                        className="nav-item"
                        style={{
                            display: "none",
                            listStyle: "none",
                        }}
                    >
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                onSetActive={() => setValue(0)}
                            ></Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                onSetActive={() => setValue(1)}
                            ></Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                onSetActive={() => setValue(2)}
                            ></Link>
                        </li>
                    </ul>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
