import { Fab } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { MdAdd as AddIcon } from "react-icons/md";

import EmployeeDialog from "../../components/dialogs/employee/EmployeeDialog";
import ReviewDialog from "../../components/dialogs/employee/ReviewDialog";
import AdminEmployeeCard from "../../components/cards/AdminEmployeeCard";
import AdminReviewCardComponent from "../../components/cards/AdminReviewCardComponent";
import LoadingComponent from "../../components/loading/LoadingComponent";
import {
    setAdmin,
    deleteEmployee,
    getEmployeeReviews,
    getEmployees,
} from "../../services/employee-service";

import classes from "./AdminDashboardPage.module.css";
import { deleteReview } from "../../services/review-service";

const AdminDashboardPage = () => {
    const [employees, setEmployees] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedEmployeeDialog, setSelectedEmployeeDialog] = useState(null);
    const [selectedReview, setSelectedReview] = useState(null);

    const handleDeleteEmployee = useCallback(async (employee) => {
        setLoading(true);

        const { error } = await deleteEmployee(employee._id);

        if (!!error) return console.log(error);

        const { data, error: e2 } = await getEmployees();

        if (!!e2) return console.log(error);

        setEmployees(data.data.employees);
        setLoading(false);
    }, []);

    const handleMakeAdmin = useCallback(async (employee) => {
        setLoading(true);

        const { error } = await setAdmin({ id: employee._id });

        if (!!error) return console.log(error);

        const { data, error: e2 } = await getEmployees();

        if (!!e2) return console.log(error);

        setEmployees(data.data.employees);
        setLoading(false);
    }, []);

    const handleDeleteReview = useCallback(
        async (review) => {
            setLoading(true);

            const { error } = await deleteReview(review._id);

            if (!!error) return console.log(error);

            const { data, e1 } = await getEmployeeReviews(selectedEmployee._id);

            if (!!e1) return console.log({ error });

            setReviews(data.data.reviews);
        },
        [selectedEmployee]
    );

    useEffect(() => {
        (async () => {
            const { data, error } = await getEmployees();

            if (!!error) return console.log(error);

            setEmployees(data.data.employees);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (!selectedEmployee) return;

            const { data, error } = await getEmployeeReviews(
                selectedEmployee._id
            );

            if (!!error) return console.log({ error });

            setReviews(data.data.reviews);
        })();
    }, [selectedEmployee]);
    if (loading) return <LoadingComponent />;

    return (
        <div className={classes.container}>
            <div className={classes.employee_container}>
                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <AdminEmployeeCard
                            key={employee._id}
                            employee={employee}
                            handleMakeAdmin={() => handleMakeAdmin(employee)}
                            handleShowReviews={() =>
                                setSelectedEmployee((oldval) =>
                                    oldval !== employee ? employee : null
                                )
                            }
                            handleUpdate={() => {
                                setSelectedEmployeeDialog(employee);
                            }}
                            handleDeleteEmployee={() =>
                                handleDeleteEmployee(employee)
                            }
                        />
                    ))
                ) : (
                    <h1 style={{ textAlign: "center", marginTop: 50 }}>
                        No Employees Yet
                    </h1>
                )}
                <Fab
                    className={classes.fab}
                    color="primary"
                    aria-label="add"
                    onClick={() => setSelectedEmployeeDialog({})}
                >
                    <AddIcon />
                </Fab>
            </div>
            {selectedEmployee && reviews && (
                <div className={classes.review_container}>
                    <h3>Reviews for {selectedEmployee.fullName}</h3>
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <AdminReviewCardComponent
                                key={review._id}
                                review={review}
                                handleUpdate={() => {
                                    setSelectedReview(review);
                                }}
                                handleDelete={() => {
                                    handleDeleteReview(review);
                                }}
                            />
                        ))
                    ) : (
                        <h1 style={{ textAlign: "center", marginTop: 50 }}>
                            No Reviews Yet
                        </h1>
                    )}
                    <Fab
                        className={classes.fab}
                        color="primary"
                        aria-label="add"
                        onClick={() => setSelectedReview({})}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            )}
            <ReviewDialog
                close={() => setSelectedReview(null)}
                review={selectedReview}
                employees={employees}
            />

            <EmployeeDialog
                close={() => setSelectedEmployeeDialog(null)}
                employee={selectedEmployeeDialog}
            />
        </div>
    );
};

export default AdminDashboardPage;
