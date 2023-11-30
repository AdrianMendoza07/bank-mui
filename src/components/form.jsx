import {
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from '@mui/lab';


import { useState } from "react";
import axios from "axios";

const url = "https://bank.jedidiazfagundez.site/api";

export default function Form() {
  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  const handdleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handdleClick = async () => {
    setLoading(true)

    try {
      const response = await axios.get(`${url}/login`);
      setUserData(response.data);
      console.log(userData);
    } catch (error) {
      console.error("An error ocurred during the login process: ", error);
    } finally{
      setLoading(false)
    }
  };

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
        <Card sx={{ padding: 5, width: 300, textAlign: "center" }}>
          <Typography variant="h5" mb={2}>
            Entra a tu Nequi
          </Typography>
          <Typography variant="subtittle1">
            Ingresa tu cuenta y contraseña
          </Typography>
          <Stack spacing={2} mt={3}>
            <Stack>
              <TextField
                variant="filled"
                name="account"
                label="Cuenta"
                onChange={handdleInputChange}
                sx={{ backgroundColor: "#FFDEF3" }}
              />
            </Stack>
            <Stack>
              <TextField
                variant="filled"
                type="password"
                name="password"
                label="Contraseña"
                onChange={handdleInputChange}
                sx={{ backgroundColor: "#FFDEF3" }}
              />
            </Stack>
            <LoadingButton
              variant="contained"
              loading={loading}
              onClick={handdleClick}
              sx={{ backgroundColor: "#6400FF"}}
            >
              Entrar
            </LoadingButton>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
