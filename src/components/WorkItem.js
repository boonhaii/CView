import React from "react";

class WorkItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.position,
            organization: props.organization,
            city: props.city,
            startDate: props.startDate,
            endDate: props.endDate
        }
    }

    render() {
        return (
           <div>
            { this.state.organization !== "" && this.state.city !== ""
                ? <p> {this.state.organization}, {this.state.city} </p>
                : <p> {this.state.organization} {this.state.city} </p> }
            { this.state.position !== "" 
                ? <p> Position: {this.state.position} </p>
                : null }
            { this.state.startDate !== "" && this.state.endDate !== ""
                ? <p> From {this.state.startDate} to {this.state.endDate} </p>
                : null }
            </div>
        )
    }
}

export default WorkItem;