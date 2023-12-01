import { Toolbar, AppBar, Link } from "@mui/material";

export default function Appbar() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link to="/">
            <img src="/src/assets/nequiLogo.png" width={120} />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
