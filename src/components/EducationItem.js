import React from "react";

class EducationItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            institution: props.institution,
            city: props.city,
            qualifications: props.qualifications,
            major: props.major,
            startDate: props.startDate,
            endDate: props.endDate
        }
    }

    render() {
        return (
            <div>
                {this.state.institution !== "" && this.state.city !== ""
                    ? <p> Institution: {this.state.institution}, {this.state.city} </p>
                    : this.state.city !== ""
                        ? <p> {this.state.institution} </p>
                        : null }
                {this.state.qualifications!== "" && this.state.major !== ""
                    ?  <p> {this.state.qualifications} in {this.state.major} </p>
                    :  <p> {this.state.qualifications} </p> }
                {this.state.startDate!== "" && this.state.endDate !== ""
                    ? <p> From {this.state.startDate} to {this.state.endDate} </p>
                    : null }
            </div>
        )
    }
}

export default EducationItem;