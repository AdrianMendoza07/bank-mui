import { Toolbar, AppBar, Link, Stack, Button } from "@mui/material";

export default function Appbar() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack justifyContent="flex-start" alignItems="center">
              <Link to="/">
                <img src="/src/assets/nequiLogo.png" width={120} />
              </Link>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Stack>
                <Button
                  variant="filled"
                  to='/home'
                  sx={{
                    backgroundColor: "#6400FF",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#6400FF",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Movimientos
                </Button>
              </Stack>
              <Stack>
                <Button variant="text" sx={{ color: "black" }}>
                  Transferir
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
