import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }

        }>
            <div style={{ border: "1px solid black", height: "70vh", width: "40vh", background: "rgb(255,255,255,10)"}} >
                <div style={{justifyContent: 'center',alignItems: 'center',height:"10vh"}}>
                    <TextField id="token" label="Enter Token Alhamdulillah" variant="filled" sx={{width:"95%",alignSelf:"center"}} />
                    <Button variant="contained" color="primary" sx={{ alignSelf: "center" }} onClick={
                        () => {
                            localStorage.setItem("token", (document.getElementById("token") as any)?.value);
                            window.location.href = "/dashboard";
                        }
                    }>Explod</Button>
                </div>


            </div>
        </div>
    )
}
