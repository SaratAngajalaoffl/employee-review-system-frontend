import { Button, IconButton, Paper } from "@mui/material";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

import classes from "./AdminEmployeeCard.module.css";

const AdminEmployeeCardComponent = ({
    employee,
    handleShowReviews,
    handleUpdate,
    handleDelete,
    handleMakeAdmin,
}) => {
    return (
        <Paper className={classes.container} elevation={3}>
            <div className={classes.top_container}>
                <div className={classes.info_container}>
                    <h3>
                        {employee.fullName || "-"}{" "}
                        {employee.isAdmin && "(Admin)"}
                    </h3>
                    <h5>@{employee.username}</h5>
                </div>
                <div className={classes.button_container}>
                    <IconButton onClick={handleUpdate}>
                        <MdEdit />
                    </IconButton>
                    <IconButton onClick={handleDelete} style={{ color: "red" }}>
                        <MdDelete />
                    </IconButton>
                    {!employee.isAdmin && (
                        <Button onClick={handleMakeAdmin}>Make Admin</Button>
                    )}
                    <Button onClick={handleShowReviews}>Reviews</Button>
                </div>
            </div>
        </Paper>
    );
};

export default AdminEmployeeCardComponent;
