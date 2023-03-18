import {
    deleteRequest,
    getRequest,
    postRequest,
} from "../utils/request-utils.js";
import {
    DELETE_EMPLOYEE_URL,
    GET_EMPLOYEES_URL,
    GET_EMPLOYEE_REVIEWS_URL,
    SET_ADMIN_URL,
    UPDATE_EMPLOYEE_URL,
} from "../utils/url-utils.js";

export const setAdmin = (data) => {
    return postRequest({
        url: SET_ADMIN_URL,
        noAuth: true,
        data,
    });
};

export const getEmployees = () => {
    return getRequest({
        url: GET_EMPLOYEES_URL,
        noAuth: true,
    });
};

export const getEmployeeReviews = (id) => {
    return getRequest({
        url: GET_EMPLOYEE_REVIEWS_URL.replace(":ID", id),
        noAuth: true,
    });
};

export const updateEmployee = (id, data) => {
    return postRequest({
        url: UPDATE_EMPLOYEE_URL.replace(":ID", id),
        noAuth: true,
        data,
    });
};

export const deleteEmployee = (id) => {
    return deleteRequest({
        url: DELETE_EMPLOYEE_URL.replace(":ID", id),
        noAuth: true,
    });
};
