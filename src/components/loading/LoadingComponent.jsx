import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingComponent = () => {
    return (
        <div
            style={{
                height: "93vh",
                width: "100vw",
                display: "grid",
                placeItems: "center",
            }}
        >
            <ClipLoader />
        </div>
    );
};

export default LoadingComponent;
