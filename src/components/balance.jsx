import { Container, Stack, Typography } from "@mui/material";

export default function Balance() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Stack alignItems="center">
          <Stack direction='row'>
            <Typography variant="h3" sx={{ textDecoration: 'underline purple'}}>$</Typography>
            <Typography variant="h3" sx={{ textDecoration: 'underline purple'}}> 1000.00</Typography>
          </Stack>
          <Stack>
            <Typography variant="body2">Dinero disponible</Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
