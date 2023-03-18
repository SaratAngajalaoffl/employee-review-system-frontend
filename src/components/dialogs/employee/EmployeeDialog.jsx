import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateEmployee } from "../../../services/employee-service";
import { register } from "../../../services/auth-service";

export default function EmployeeDialog({ close, employee }) {
    const [employeeDetails, setEmployeeDetails] = useState(employee);

    useEffect(() => {
        setEmployeeDetails(employee);
    }, [employee]);

    const handleClose = () => {
        setEmployeeDetails(null);
        close();
    };

    const handleUpdate = async () => {
        const { error } = await updateEmployee(employee._id, employeeDetails);

        if (!!error) return console.log(error);

        window.location.reload();
    };

    const handleCreate = async () => {
        const { error } = await register(employeeDetails);

        if (!!error) return console.log(error);

        window.location.reload();
    };

    if (!employeeDetails) return <></>;

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>
                {employee._id ? "Update" : "Create"} Employee
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="fullname"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={employeeDetails.fullName}
                    onChange={(e) => {
                        setEmployeeDetails((oldval) => ({
                            ...oldval,
                            fullName: e.target.value,
                        }));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={employeeDetails.username}
                    onChange={(e) => {
                        setEmployeeDetails((oldval) => ({
                            ...oldval,
                            username: e.target.value,
                        }));
                    }}
                />
                {!employee._id && (
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={employeeDetails.password}
                        onChange={(e) => {
                            setEmployeeDetails((oldval) => ({
                                ...oldval,
                                password: e.target.value,
                            }));
                        }}
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    disabled={employeeDetails === employee}
                    onClick={employee._id ? handleUpdate : handleCreate}
                >
                    {employee._id ? "Update" : "Create"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
