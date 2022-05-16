import React from "react";
import { connect } from 'react-redux';
import { selectRecord } from '../actions';

class RecordList extends React.Component {
    
    renderRecords() {
        return this.props.records.map((record) => {
            return (
                <div className="item" key={record.distance}>
                    <div className="right floated content">
                        <button className="ui button primary" 
                                onClick={() => this.props.selectRecord(record)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{record.distance}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderRecords()}</div>;
    }
};

const mapStateToProps = state => {
    return { records: state.records };
};

export default connect(mapStateToProps, { selectRecord })(RecordList);