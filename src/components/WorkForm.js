import React from "react";

class WorkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            organization: "",
            city: "",
            startDate: "",
            endDate: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return(
            <form id="workform">
                <input type="text" name="position" value={this.state.position} onChange={this.handleChange} placeholder="Position" ></input> <br />
                <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} placeholder="Organization" ></input> <br />
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City"></input> <br />
                <input type="text" name="startDate" value={this.state.startDate} onChange={this.handleChange} placeholder="Start Date" ></input> <br />
                <input type="text" name="endDate" value={this.state.endDate} onChange={this.handleChange} placeholder="End Date"></input> <br />
                <button> Delete </button>
            </form>
        )
    }
}

export default WorkForm;