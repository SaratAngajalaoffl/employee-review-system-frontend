import React from "react";
import { Link } from "react-router-dom";

import classes from "./LogoComponent.module.css";

const LogoComponent = () => {
    return (
        <Link to="/dashboard" className={classes.logo}>
            Review
        </Link>
    );
};

export default LogoComponent;
