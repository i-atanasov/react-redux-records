export const selectRecord = record => {
    return {
        type: "RECORD_SELECTED",
        payload: record
    };
};

