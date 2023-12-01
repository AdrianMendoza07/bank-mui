import { Container, Stack, Typography } from "@mui/material";
import { useData } from "./dataContext";

export default function Balance() {
  
  const { userData, userToken } = useData();

  return (
      <>
      {userData ? (
      <div>
      <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Stack textAlign="center">
        <Typography variant="h3" sx={{ textDecoration: 'underline purple' }}>$ {userData.balance}</Typography>
        <Typography variant="body2">Dinero disponible</Typography>
      </Stack>
    </Container>
      </div>
      
    ) : (
      <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Stack textAlign="center">
        <Typography variant="body2">Dinero no disponible</Typography>
      </Stack>
    </Container>
      
    )}
      </>

    
    
  );
}