import { Button, Paper, Rating, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { addReview } from "../../services/review-service";

import classes from "./ReviewCardComponent.module.css";

const ReviewCardComponent = ({ review }) => {
    const [rating, setRating] = useState(null);
    const [notes, setNotes] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitReview = useCallback(async () => {
        const { error } = await addReview({ rating, notes }, review._id);

        if (!!error) return console.log(error);

        setIsSubmitted(true);
    }, [notes, rating, review]);

    if (isSubmitted) {
        return (
            <Paper elevation={3} className={classes.container}>
                <h3 style={{ color: "green" }}>
                    Review For {review.reviewee.fullName} Submitted Successfully
                </h3>
            </Paper>
        );
    }

    return (
        <Paper className={classes.container} elevation={3}>
            <div className={classes.top_container}>
                <div className={classes.info_container}>
                    <h3>{review.reviewee.fullName}</h3>
                    <h5>@{review.reviewee.username}</h5>
                </div>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(_, newValue) => {
                        setRating(newValue);
                    }}
                />
            </div>

            <TextField
                fullWidth
                id="standard-basic"
                label="Review"
                variant="standard"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{ marginTop: 20 }}
            />

            <Button
                fullWidth
                variant="contained"
                style={{ marginTop: 20 }}
                disabled={!rating || notes.length === 0}
                onClick={submitReview}
            >
                Submit
            </Button>
        </Paper>
    );
};

export default ReviewCardComponent;
