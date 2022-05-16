import React from "react";
import RecordList from "./RecordList";
import RecordDetail from "./RecordDetail";

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row"  style={{ margin: '30px' }}>
                <div className="column six wide">
                    <RecordList />   
                </div>
                <div className="colum ten wide">
                    <RecordDetail />
                </div>
            </div>   
        </div>
    ); 
};

export default App;