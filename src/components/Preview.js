import React from "react";
import DisplayPersonal from "./DisplayPersonal";
import DisplayWork from "./DisplayWork";
import DisplayEducation from "./DisplayEducation";
import uniqid from "uniqid";

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
                    {this.state.workExperience[0].organization !== "" 
                        ? <div> 
                            <hr />
                            <h2><u>Work and Internship Experiences</u></h2>
                          </div>
                        : null}
                    <DisplayWork key={uniqid()} workExperience={this.state.workExperience} />
                </div>
                <div className="education">
                    {this.state.educationExperience[0].institution !== "" 
                        ? <div> 
                            <hr />
                            <h2><u>Education</u></h2>
                          </div>
                        : null}
                    <DisplayEducation key={uniqid()} educationExperience={this.state.educationExperience} />
                </div>
            </div>
        )
    }
}




export default Preview;