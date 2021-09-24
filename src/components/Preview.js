import React from "react";
import PersonalInfo from "./PersonalInfo";
import WorkItem from "./WorkItem";
import EducationItem from "./EducationItem";

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
                    ? <PersonalInfo item={this.state.personalInfo} /> 
                    : null }
                </div>
            </div>
        )

       /* <div className="work">
                    {this.state.workExperience.map(item => <WorkItem item={item}/>)}
                </div>
                <div className="education">
                    {this.state.educationExperience.length > 0
                    ? this.state.educationExperience.map((item) => <EducationItem item={item}/>)
                    : null }
                </div>*/
    }
}

export default Preview;