import React from "react";

class WorkItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: props.item.position,
            organization: props.item.organization,
            city: props.item.city,
            startDate: props.item.startDate,
            endDate: props.item.endDate
        }
    }
    
    render() {
        return (
            <div>
                <p> Position: {this.state.position} </p>
                <p> Organization: {this.state.organization}, {this.state.city} </p>
                <p> From {this.state.startDate} to {this.state.endDate} </p>
            </div>
        )
    }
}

export default WorkItem;