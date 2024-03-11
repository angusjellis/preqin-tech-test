import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "navy" }}>
        <Typography
          variant="h6"
          component="div"
          color={"white"}
          sx={{ flexGrow: 1 }}
        >
          <a href="https://www.preqin.com/">Home</a> <a href="/">Investors</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
