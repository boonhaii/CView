import React from "react";

class EducationExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            institution: props.item.institution,
            city: props.item.city,
            qualifications: props.item.qualifications,
            major: props.item.major,
            startDate: props.item.startDate,
            endDate: props.item.endDate
        }
    }

    render() {
        return (
            <div>
                <p> Institution: {this.state.institution}, {this.state.city} </p>
                <p> Qualification: {this.state.qualifications} in {this.state.major} </p>
                <p> From {this.state.startDate} to {this.state.endDate} </p>
            </div>
        )
    }
}

export default EducationExperience;