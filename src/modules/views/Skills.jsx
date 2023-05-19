import * as React from "react"
import ProductHeroLayout from "./ProductHeroLayout"
import {
    Grid,
    Card,
    Box,
    CardMedia,
    Typography,
    CardContent,
} from "@mui/material"
import { scroller } from "react-scroll"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"

const Skill = ({ item }) => {
    return (
        <Card
            sx={{
                display: "flex",
                maxHeight: "100px",
                justifyContent: "center",
                position: "relative",
                "&:hover .hidden-box": { display: "block" },
            }}
        >
            <Box
                className="hidden-box"
                backgroundColor="rgba(241, 248, 246, 0.9)"
                sx={{
                    alignSelf: "center",
                    display: "none",
                    position: "absolute",
                    width: "100%",
                }}
            >
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography color="#1e3932" variant="h5" fontWeight="900">
                        {item}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                alt="skill icon"
                src={skillIcons[item]}
                sx={{
                    height: "50px",
                    width: "auto",
                    alignSelf: "center",
                    m: "10px 0",
                }}
            />
        </Card>
    )
}

const skillIcons = {
    Firebase:
        "https://cdn.sanity.io/images/zpskic8f/production/a34200f21d73250b338bfcf423bb6b2e779bf7f6-32x32.svg",
    Bootstrap:
        "https://cdn.sanity.io/images/zpskic8f/production/c5b0d9a66f7c8c08b8d4d9aafe55b4f9c0c7d24d-256x256.svg",
    React: "https://cdn.sanity.io/images/zpskic8f/production/bcf867381478447e5f817a79410e0fa8bddfff38-256x228.svg",
    JavaScript:
        "https://cdn.sanity.io/images/zpskic8f/production/a9f58e5c8d5d0c088ff7e5e43363817b9fa1832b-256x256.svg",
    PostgreSQL:
        "https://cdn.sanity.io/images/zpskic8f/production/78caffbd13c7c07ccae5f3144c7df87ceb56bcb6-128x128.svg",
    CSS: "https://cdn.sanity.io/images/zpskic8f/production/64359677c12dadf13878ea291f179acd0f168110-32x32.svg",
    MUI: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    HTML: "https://cdn.sanity.io/images/zpskic8f/production/f8d913d0a1ebc51e318226ea3d69ff3e01917cd7-32x32.svg",
    SANITY: "https://cdn.sanity.io/images/zpskic8f/production/2a14afdf73e2c5232d56335d20faa8944a39fe9e-512x104.svg",
    Express:
        "https://cdn.sanity.io/images/zpskic8f/production/bde772e9e79c90a7e56bfe60aab4bc59ce641086-512x149.svg",
}

export default function Skills({ result }) {
    return (
        <div id="skills">
            <ProductHeroLayout
                sxBackground={{
                    backgroundColor: "#f1f8f6", // Average color of the background image.
                }}
            >
                <Typography color="inherit" align="left" variant="h4">
                    My Skills
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {result &&
                        result.skills.map((skill, index) => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Skill item={skill} />
                                </Grid>
                            )
                        })}
                </Grid>
                <Box
                    height="16"
                    width="20"
                    alt="arrow down"
                    sx={{
                        position: "absolute",
                        left: "50vw",
                        bottom: 32,
                    }}
                    onClick={() => {
                        scroller.scrollTo("contact", {
                            duration: 200,
                            delay: 0,
                            smooth: "easeInOutQuart",
                        })
                    }}
                >
                    <KeyboardDoubleArrowDownIcon />
                </Box>
            </ProductHeroLayout>
        </div>
    )
}
