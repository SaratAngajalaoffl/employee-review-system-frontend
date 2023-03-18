import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createReview, updateReview } from "../../../services/review-service";
import { InputLabel, MenuItem, Select } from "@mui/material";

export default function ReviewDialog({ close, review, employees }) {
    const [reviewDetails, setReviewDetails] = useState(review);

    useEffect(() => {
        setReviewDetails(review);
    }, [review]);

    const handleClose = () => {
        setReviewDetails(null);
        close();
    };

    const handleUpdate = async () => {
        const { error } = await updateReview(review._id, reviewDetails);

        if (!!error) return console.log(error);

        window.location.reload();
    };

    const handleCreate = async () => {
        const { error } = await createReview(reviewDetails);

        if (!!error) return console.log(error);

        window.location.reload();
    };

    console.log({ review });

    if (!reviewDetails) return <></>;

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle style={{ width: 500 }}>
                {review._id ? "Update" : "Assign"} Employee
            </DialogTitle>
            <DialogContent>
                {(!review._id || review.isPending) && (
                    <>
                        <InputLabel>Reviewer</InputLabel>
                        <Select
                            fullWidth
                            id="reviewer"
                            value={reviewDetails.reviewer}
                            onChange={(e) => {
                                setReviewDetails((oldval) => ({
                                    ...oldval,
                                    reviewer: e.target.value,
                                }));
                            }}
                        >
                            {employees.map((employee) => (
                                <MenuItem value={employee}>
                                    {employee.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </>
                )}
                {(!review._id || review.isPending) && (
                    <>
                        <InputLabel style={{ marginTop: 20 }}>
                            Reviewee
                        </InputLabel>
                        <Select
                            fullWidth
                            id="reviewee"
                            value={reviewDetails.reviewee}
                            onChange={(e) => {
                                setReviewDetails((oldval) => ({
                                    ...oldval,
                                    reviewee: e.target.value,
                                }));
                            }}
                        >
                            {employees.map((employee) =>
                                employee?._id !==
                                reviewDetails?.reviewer?._id ? (
                                    <MenuItem value={employee}>
                                        {employee.fullName}
                                    </MenuItem>
                                ) : (
                                    <></>
                                )
                            )}
                        </Select>
                    </>
                )}
                {!!review?.rating && (
                    <TextField
                        autoFocus
                        margin="dense"
                        id="rating"
                        label="Rating"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={reviewDetails.rating}
                        onChange={(e) => {
                            setReviewDetails((oldval) => ({
                                ...oldval,
                                rating: e.target.value,
                            }));
                        }}
                    />
                )}
                {!!review?.notes && (
                    <TextField
                        autoFocus
                        margin="dense"
                        id="notes"
                        label="Review"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={reviewDetails.notes}
                        onChange={(e) => {
                            setReviewDetails((oldval) => ({
                                ...oldval,
                                notes: e.target.value,
                            }));
                        }}
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    disabled={reviewDetails === review}
                    onClick={review._id ? handleUpdate : handleCreate}
                >
                    {review._id ? "Update" : "Assign"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
