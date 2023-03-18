import { Button, Paper, Rating } from "@mui/material";
import React from "react";

import classes from "./AdminReviewCardComponent.module.css";

const AdminReviewCardComponent = ({ review, handleUpdate, handleDelete }) => {
    return (
        <Paper className={classes.container} elevation={3}>
            <div className={classes.top_container}>
                <div className={classes.info_container}>
                    <h3>
                        By {review.reviewer.fullName || "-"}
                        {review.isPending && " (Pending)"}
                    </h3>
                </div>
                <Rating
                    readOnly
                    name="simple-controlled"
                    value={review.rating}
                />
            </div>
            <h3>{review.notes}</h3>
            <div>
                {!review.isPending && (
                    <Button
                        variant="contained"
                        style={{ marginTop: 20, marginRight: 20 }}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: 20 }}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </div>
        </Paper>
    );
};

export default AdminReviewCardComponent;
