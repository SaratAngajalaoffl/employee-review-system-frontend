import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../utils/storage-utils";
import { useAuthContext } from "../contexts/AuthContext";
import LogoComponent from "../logo/LogoComponent";

import classes from "./NavbarComponent.module.css";

const NavbarComponent = () => {
    const { authData } = useAuthContext();

    return (
        <nav className={classes.container}>
            <LogoComponent />
            {authData.isAuthenticated ? (
                <ul className={classes.nav_items}>
                    <li className={classes.nav_item}>
                        Welcome, {authData.userData.username}
                    </li>
                    {authData.userData.isAdmin && (
                        <li className={classes.nav_item}>
                            <Link to="/admin">Admin Dashboard</Link>
                        </li>
                    )}
                    <li className={classes.nav_item}>
                        <Button onClick={logoutUser}>Logout</Button>
                    </li>
                </ul>
            ) : (
                <ul className={classes.nav_items}>
                    <li className={classes.nav_item}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={classes.nav_item}>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavbarComponent;
