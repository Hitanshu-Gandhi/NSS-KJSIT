import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dev3 from "../assets/dev3.jpg";
import Header from "./Header";
import Header2 from "./Header2";

const Developer = () => {
  const theme = useTheme();

  return (
    <div className="developer-page">
      <Header />
      <Header2 />
      <h1 className="text-center font-[sans-serif] md:mt-8 text-4xl underline md:no-underline md:text-5xl p-2">
        Meet the developers
      </h1>
      <div className=" p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 font-[Poppins] justify-center items-center">
        {/* dev1 */}
        <div className="md:p-4 rounded-2xl md:w-max">
          <Card
            sx={{ display: "flex" }}
            className="drop-shadow-2xl bg-[#00ffff28] hover:bg-[#fff70031] rounded-2xl"
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" fontFamily={"Poppins"} variant="h5">
                  Hitanshu Gandhi
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Web Developer
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton>
                  <a href="https://instagram.com/hitanshu_gandhi?igshid=YmMyMTA2M2Y=">
                    <InstagramIcon
                      sx={{
                        color: "#C13584",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://github.com/Hitanshu-Gandhi">
                    <GitHubIcon
                      sx={{
                        color: "black",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton aria-label="next">
                  <a href="https://www.linkedin.com/in/hitanshu-gandhi-92b855244">
                    <LinkedInIcon
                      sx={{
                        color: "#0A66C2",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 185 }}
              image={dev1}
              className="rounded-2xl h-[15rem] hover:bg-[#ff565634] p-2 shadow-inner"
            />
          </Card>
        </div>

        {/* dev2 */}
        <div className="md:p-4 rounded-2xl md:w-max">
          <Card
            sx={{ display: "flex" }}
            className="drop-shadow-2xl bg-[#00ffff28] hover:bg-[#fff70031] rounded-2xl"
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" fontFamily={"Poppins"} variant="h5">
                  Sakshi Gangurde
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Web Developer
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton>
                  <a href="https://instagram.com/hitanshu_gandhi?igshid=YmMyMTA2M2Y=">
                    <InstagramIcon
                      sx={{
                        color: "#C13584",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://github.com/sakshirgangurde">
                    <GitHubIcon
                      sx={{
                        color: "black",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton aria-label="next">
                  <a href="https://www.linkedin.com/in/hitanshu-gandhi-92b855244">
                    <LinkedInIcon
                      sx={{
                        color: "#0A66C2",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 185 }}
              image={dev2}
              className="rounded-2xl h-[15rem] hover:bg-[#ff565634] p-2 shadow-inner"
            />
          </Card>
        </div>

        {/* dev3 */}
        <div className="md:p-4 rounded-2xl md:w-max">
          <Card
            sx={{ display: "flex" }}
            className="drop-shadow-2xl bg-[#00ffff28] hover:bg-[#fff70031] rounded-2xl"
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" fontFamily={"Poppins"} variant="h5">
                  Srushti kanade
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Web Developer
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton>
                  <a href="https://instagram.com/hitanshu_gandhi?igshid=YmMyMTA2M2Y=">
                    <InstagramIcon
                      sx={{
                        color: "#C13584",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton>
                  <a href="https://github.com/srushtiskanade">
                    <GitHubIcon
                      sx={{
                        color: "black",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
                <IconButton aria-label="next">
                  <a href="https://www.linkedin.com/in/srushti-kanade-49b692249">
                    <LinkedInIcon
                      sx={{
                        color: "#0A66C2",
                        alignItems: "center",
                        fontSize: "1.8rem",
                      }}
                    />
                  </a>
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 185 }}
              image={dev3}
              className="rounded-2xl h-[15rem] hover:bg-[#ff565634] p-2 shadow-inner"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Developer;
