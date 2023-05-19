import * as React from "react"

import ProductHeroLayout from "./ProductHeroLayout"
import Carousel from "react-material-ui-carousel"
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
} from "@mui/material"
import { scroller } from "react-scroll"
import Button from "../components/Button"

import {
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
    KeyboardDoubleArrowDown,
} from "@mui/icons-material"

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

// const backgroundImage =
//     "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400"

function Item({ item }) {
    return (
        <>
            <Card sx={{ display: { xs: "none", lg: "flex" } }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography
                            color="#1e3932"
                            variant="h4"
                            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            color="#1e3932"
                            align="left"
                            variant="body2"
                            sx={{ mb: 4, mt: 4 }}
                        >
                            {item.intro}
                        </Typography>
                        {item.technique.map((tech, index) => {
                            return skillIcons[tech] ? (
                                <img
                                    key={index}
                                    src={skillIcons[tech]}
                                    alt={tech}
                                    style={{
                                        width: "40px",
                                        margin: "10px 20px",
                                        bottom: "10px",
                                    }}
                                />
                            ) : (
                                <p style={{ display: "inline-block" }}>
                                    {tech}
                                </p>
                            )
                        })}
                    </CardContent>
                    <CardActions sx={{ flex: "1 0 auto" }}>
                        <Button href={item.URL}>Live Demo</Button>
                    </CardActions>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: "600" }}
                    image={
                        item.demoURL
                            ? item.demoURL
                            : "https://placehold.co/600x400/EEE/31343C"
                    }
                    alt="project preview"
                />
            </Card>
            <Card sx={{ display: { xs: "block", lg: "none" } }}>
                <CardMedia
                    component="img"
                    alt={item.name}
                    height="400"
                    image={
                        item.demoURL
                            ? item.demoURL
                            : "https://placehold.co/600x400/EEE/31343C"
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.intro}
                    </Typography>
                    {item.technique.map((tech, index) => {
                        return skillIcons[tech] ? (
                            <img
                                key={index}
                                src={skillIcons[tech]}
                                alt={tech}
                                style={{
                                    width: "40px",
                                    margin: "10px 20px",
                                    bottom: "10px",
                                }}
                            />
                        ) : (
                            <p style={{ display: "inline-block" }}>{tech}</p>
                        )
                    })}
                </CardContent>
                <CardActions>
                    <Button href={item.URL} size="small">
                        Live Demo
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default function Projects({ result }) {
    return (
        <div id="projects">
            <ProductHeroLayout
                sxBackground={{
                    backgroundColor: "#f1f8f6", // Average color of the background image.
                    backgroundPosition: "center",
                }}
            >
                <Typography color="inherit" align="left" variant="h4">
                    Projects
                </Typography>
                <Carousel
                    PrevIcon={<KeyboardDoubleArrowLeft />}
                    NextIcon={<KeyboardDoubleArrowRight />}
                    indicatorContainerProps={{
                        style: {
                            marginTop: "35px", // 5
                        },
                    }}
                    animation="slide"
                >
                    {result &&
                        result.projects.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                </Carousel>
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
                        scroller.scrollTo("skills", {
                            duration: 200,
                            delay: 0,
                            smooth: "easeInOutQuart",
                        })
                    }}
                >
                    <KeyboardDoubleArrowDown />
                </Box>
            </ProductHeroLayout>
        </div>
    )
}
