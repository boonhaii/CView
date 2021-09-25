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
            endDate: props.endDate,
            description: props.description
        }
    }

    render() {
        return (
            <div id="educationItem">
                <div className="details">
                {this.state.institution !== "" && this.state.city !== ""
                    ? <p id="institution"> <b>{this.state.institution}, {this.state.city} </b></p>
                    : this.state.city !== ""
                        ? <p id="institution"> <b>{this.state.institution} </b> </p>
                        : null }
                {this.state.qualifications!== "" && this.state.major !== ""
                    ?  <p> <i>{this.state.qualifications} in {this.state.major} </i> </p>
                    :  <p> <i> {this.state.qualifications} </i> </p> }
                {this.state.description !== ""
                    ? <div> {this.state.description.split("\n").map(item => {
                        return (
                            <p className="description">- {item}</p>
                        )
                    })} </div>
                    : null}
                 </div>
                {this.state.startDate!== "" && this.state.endDate !== ""
                    ? <p id="period"> {this.state.startDate} - {this.state.endDate} </p>
                    : null }
            </div>
        )
    }
}

export default EducationItem;