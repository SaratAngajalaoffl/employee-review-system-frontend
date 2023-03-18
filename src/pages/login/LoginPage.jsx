import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../components/contexts/AuthContext";

import classes from "./LoginPage.module.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { handleLogin } = useAuthContext();

    return (
        <div className={classes.container}>
            <Paper className={classes.inner_container} elevation={3}>
                <div className={classes.title}>Login</div>

                <div className={classes.form_container}>
                    <TextField
                        fullWidth
                        id="username"
                        label="Username"
                        variant="standard"
                        style={{ marginTop: 20 }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        id="password"
                        label="Password"
                        variant="standard"
                        style={{ marginTop: 20 }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        style={{ marginTop: 20 }}
                        onClick={() => handleLogin(username, password)}
                    >
                        Login
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default LoginPage;
