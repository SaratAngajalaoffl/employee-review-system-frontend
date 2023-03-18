import React, { useEffect, useState } from "react";
import ReviewCardComponent from "../../components/cards/ReviewCardComponent";

import LoadingComponent from "../../components/loading/LoadingComponent";
import { getPendingReviews } from "../../services/review-service";

import classes from "./Dashboard.module.css";

const DashboardPage = () => {
    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { data, error } = await getPendingReviews();

            if (!!error) return console.log(error);

            setReviews(data.data.pendingReviews);
            setLoading(false);
        })();
    }, []);

    if (loading) return <LoadingComponent />;

    return (
        <div className={classes.container}>
            {reviews.length > 0 ? (
                reviews.map((review) => <ReviewCardComponent review={review} />)
            ) : (
                <h1 style={{ textAlign: "center", marginTop: 50 }}>
                    No Pending Reviews
                </h1>
            )}
        </div>
    );
};

export default DashboardPage;
