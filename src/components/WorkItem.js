import React from "react";

class WorkItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.position,
            organization: props.organization,
            city: props.city,
            startDate: props.startDate,
            endDate: props.endDate,
            description: props.description
        }
    }

    render() {
        return (
           <div id="workItem">
                <div className="details">
                    { this.state.organization !== "" && this.state.city !== ""
                        ? <p id="organization"> <b>{this.state.organization}, {this.state.city}</b></p>
                        : <p id="organization"> <b>{this.state.organization} {this.state.city}</b></p> }
                    { this.state.position !== "" 
                        ? <p id="position"> <i>{this.state.position}</i> </p>
                        : null }
                    { this.state.description !== ""
                        ? <div> {this.state.description.split("\n").map(item => {
                            return (
                                <p className="description">- {item}</p>
                            )
                        })} </div>
                        : null}
                </div>
                { this.state.startDate !== "" && this.state.endDate !== ""
                    ? <p id="period"> {this.state.startDate} - {this.state.endDate} </p>
                    : null }
            </div>
        )
    }
}

export default WorkItem;