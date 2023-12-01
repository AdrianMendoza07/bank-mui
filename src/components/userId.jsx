import { Card, IconButton, Stack, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";

export default function UserID() {
  return (
    <>
      <Card
        sx={{
          width: 140,
          textAlign: "center",
          bgcolor: "black",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack>
            <Typography variant="h6" color="white" fontFamily='roboto'>
              No. 014
            </Typography>
          </Stack>
          <Stack>
            <CopyToClipboard text="014">
              <IconButton>
                <ContentCopyIcon sx={{ color: "white" }} />
              </IconButton>
            </CopyToClipboard>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
