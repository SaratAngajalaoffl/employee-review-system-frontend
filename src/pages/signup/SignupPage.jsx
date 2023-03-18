import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../components/contexts/AuthContext";

import classes from "./SignupPage.module.css";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullName] = useState("");

    const { handleSignup } = useAuthContext();

    return (
        <div className={classes.container}>
            <Paper className={classes.inner_container} elevation={3}>
                <div className={classes.title}>Signup</div>

                <div className={classes.form_container}>
                    <TextField
                        fullWidth
                        id="fullname"
                        label="Full Name"
                        variant="standard"
                        style={{ marginTop: 20 }}
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                    />
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
                        onClick={() => handleSignup(username, password, fullname)}
                    >
                        Signup
                    </Button>
                </div>
            </Paper>
        </div>
    );
};

export default SignupPage;
