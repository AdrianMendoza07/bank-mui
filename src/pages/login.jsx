import Form from "../components/form";
import Appbar from "../components/appbar";
import { Box, Container } from "@mui/material";

export default function Login({info}) {

  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/src/assets/background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Container>
          <Appbar />
          <Form info={info}/>
        </Container>
      </Box>
    </>
  );
}
