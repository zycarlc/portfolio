import * as React from "react"
import ProductHeroLayout from "./ProductHeroLayout"
import {
    Typography,
    Stack,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
} from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import GitHubIcon from "@mui/icons-material/GitHub"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const Icons = {
    email: <EmailIcon />,
    github: <GitHubIcon />,
    location: <LocationOnIcon />,
    telephone: <PhoneIphoneIcon />,
    linkedin: <LinkedInIcon />,
}

export default function Contact({ result }) {
    const contact = Object.entries(result.contactInfo ? result.contactInfo : {})

    return (
        <div id="contact">
            <ProductHeroLayout
                sxBackground={{
                    backgroundColor: "#f1f8f6", // Average color of the background image.
                    backgroundPosition: "center",
                }}
            >
                <Typography color="inherit" align="left" variant="h4">
                    Contact Me
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={0.5}
                        >
                            {result
                                ? contact.map(([method, value], i) => {
                                      return (
                                          <Grid
                                              container
                                              sx={{
                                                  mt: { xs: "10px", sm: "25%" },
                                              }}
                                          >
                                              <Grid
                                                  item
                                                  sm={6}
                                                  xs={2}
                                                  sx={{
                                                      textAlign: "right",
                                                      pr: "10px",
                                                  }}
                                              >
                                                  {Icons[method]}
                                              </Grid>
                                              <Grid item xs={6}>
                                                  <Typography
                                                      color="inherit"
                                                      align="left"
                                                      variant="body2"
                                                      key={i}
                                                  >
                                                      {value}
                                                  </Typography>
                                              </Grid>
                                          </Grid>
                                      )
                                  })
                                : "loading"}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card style={{ maxWidth: 450, padding: " 20px 5px" }}>
                            <Typography gutterBottom variant="h5">
                                Message Me
                            </Typography>
                            <form action="">
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                label="Name"
                                                placeholder="Your Name"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                label="Email"
                                                type="email"
                                                placeholder="Email"
                                                variant="outlined"
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid xs={12} item>
                                            <TextField
                                                label="Message"
                                                placeholder="Message"
                                                variant="outlined"
                                                rows={4}
                                                multiline
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid xs={12} item>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                            >
                                                SUBMIT
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </ProductHeroLayout>
        </div>
    )
}
