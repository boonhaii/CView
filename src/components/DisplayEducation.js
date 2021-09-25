import React from "react";
import EducationItem from "./EducationItem";
import uniqid from "uniqid";

class DisplayEducation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            educationExperience: props.educationExperience
        }
    }

    render() {
        return (
            <div id="displayEducation">
               {this.state.educationExperience.map(item => {
                return (
                <EducationItem   
                    key={uniqid()}
                    institution={item.institution}
                    city= {item.city}
                    qualifications={item.qualifications}
                    major={item.major}
                    startDate= {item.startDate}
                    endDate= {item.endDate}
                    description={item.description}  /> )})}
            </div>
        )
    }
}

export default DisplayEducation;