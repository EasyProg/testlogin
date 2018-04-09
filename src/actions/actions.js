/**
 * Created by Михаил on 07.04.2018.
 */
export const requestSession = () => {
    return { type: 'REQUESTED_SESSION' }
};

export const requestSessionSuccess = (data) => {
    return { type: 'REQUESTED_SESSION_SUCCEEDED', token: data.token }
};

export const clearSession = () => {
    return { type: 'CLEAR_SESSION', token:'' }
}

export const requestSessionError = () => {
    return { type: 'REQUESTED_SESSION_FAILED' }
};

export const fetchSession = () => {
    return { type: 'FETCHED_SESSION' }
};
