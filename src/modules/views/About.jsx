import * as React from "react"
import ProductHeroLayout from "./ProductHeroLayout"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import { scroller } from "react-scroll"
// const backgroundImage =
//     "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400"

export default function About({ result }) {
    return (
        <div id="about">
            <ProductHeroLayout
                sxBackground={{
                    backgroundColor: "#f1f8f6", // Average color of the background image.
                    backgroundPosition: "center",
                }}
            >
                <Typography color="inherit" align="left" variant="h2">
                    {result.name}
                </Typography>
                <Typography
                    color="inherit"
                    align="left"
                    variant="h5"
                    sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
                >
                    {result.jobTitle}
                </Typography>
                {result
                    ? result.profile.map((pro, i) => {
                          return (
                              <Typography
                                  color="inherit"
                                  align="left"
                                  variant="body2"
                                  sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
                                  key={i}
                              >
                                  {pro}
                              </Typography>
                          )
                      })
                    : "loading"}
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
                        scroller.scrollTo("projects", {
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
