import React from "react";
import { connect } from "react-redux";

const RecordDetail = ({ selectedRecord }) => {
    if (!selectedRecord) {
        return <div>Select record to view details</div>;
    }
    return (
        <div style={{ marginLeft: '50px' }}>
            <h3>Details for {selectedRecord.distance}</h3>
            <div style={{ fontStyle: 'italic' }}>
                Time: {selectedRecord.time} <br/>
                Course: {selectedRecord.course}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {selectedRecord: state.selectedRecord};    
}

export default connect(mapStateToProps)(RecordDetail);