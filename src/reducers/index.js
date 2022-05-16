import { combineReducers } from "redux";

const recordReducer = () => {
    return [
        {
            distance: '5000',
            time: '16:32',
            course: 'South Park' 
        },
        {
            distance: '10000',
            time: '35:40',
            course: 'South Park' 
        },
        {
            distance: '21.1',
            time: '1:17:40',
            course: 'Sofia Marathon' 
        },
        {
            distance: '42.2',
            time: '2:40:40',
            course: 'Plovdiv Marathon' 
        },
    ];
    
};

const selectedRecordReducer = (selectedRecord = null, action) => {
    if (action.type === 'RECORD_SELECTED') {
        return action.payload;
    }
    return selectedRecord;
};


export default combineReducers({
    records: recordReducer,
    selectedRecord: selectedRecordReducer
});