import {
    deleteRequest,
    getRequest,
    postRequest,
} from "../utils/request-utils.js";
import {
    ADD_REVIEW_URL,
    CREATE_REVIEW_URL,
    DELETE_REVIEW_URL,
    PENDING_REVIEWS_URL,
    UPDATE_REVIEW_URL,
} from "../utils/url-utils.js";

export const getPendingReviews = () => {
    return getRequest({
        url: PENDING_REVIEWS_URL,
        noAuth: true,
    });
};

export const createReview = (data) => {
    return postRequest({
        url: CREATE_REVIEW_URL,
        noAuth: true,
        data,
    });
};

export const addReview = (data, id) => {
    return postRequest({
        url: ADD_REVIEW_URL.replace(":ID", id),
        noAuth: true,
        data,
    });
};

export const updateReview = (id, data) => {
    return postRequest({
        url: UPDATE_REVIEW_URL.replace(":ID", id),
        noAuth: true,
        data,
    });
};

export const deleteReview = (id) => {
    return deleteRequest({
        url: DELETE_REVIEW_URL.replace(":ID", id),
        noAuth: true,
    });
};
