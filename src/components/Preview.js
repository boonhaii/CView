import React from "react";
import DisplayPersonal from "./DisplayPersonal";
import DisplayWork from "./DisplayWork";
import DisplayEducation from "./DisplayEducation";

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: props.personalInfo,
            educationExperience: props.educationExperience,
            workExperience: props.workExperience
        }
    }

    render() {
        return (
            <div> 
                <div className="header">
                    { (this.state.personalInfo !== "" ) 
                    ? <DisplayPersonal personalInfo={this.state.personalInfo} /> 
                    : null }
                </div>
                <div className="work">
                    <DisplayWork workExperience={this.state.workExperience} />
                </div>
                <div className="education">
                    <DisplayEducation educationExperience={this.state.educationExperience} />
                </div>
            </div>
        )
    }
}




export default Preview;