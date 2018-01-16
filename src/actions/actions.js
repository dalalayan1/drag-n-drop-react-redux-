export const getAppDetails = (data) => {
    return {
        type: 'APP_DETAILS',
        payload: data
    }
}

export const updateList = (data) => {
    return {
        type: 'UPDATE_LIST',
        item: data
    }
}

export const removeItem = (data) => {
    return {
        type: 'REMOVE_CARD',
        item: data
    }
}