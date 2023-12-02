import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function User({info}) {

    const { userData } = info
    console.log(userData)

    return(
        
        <>
            <Stack direction='row' spacing={2}>
                <Stack>
                    <img src="/src/assets/user-image.png" width={40}/>
                </Stack>
                <Stack justifyContent='flex-end' direction='column'>
                    <Stack>
                        <Typography variant="subtittle1" color='black' fontFamily='roboto' fontWeight={300}>Bienvenid@ de vuelta,</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" color='black' fontFamily='roboto' fontWeight={500}>{userData.name}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}