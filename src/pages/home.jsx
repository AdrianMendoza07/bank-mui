import HomeAppbar from "../components/homeAppbar";
import Appbar from "../components/appbar";
import { Stack } from "@mui/material";
import Balance from "../components/balance";


export default function Home(){

    return(
        
        <>
            <Stack spacing={10}>
                <Appbar/>
                <HomeAppbar/>
                <Balance/>
            </Stack>
            
        </>
        
    )
}