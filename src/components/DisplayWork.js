import React from "react";
import WorkItem from "./WorkItem";
import uniqid from "uniqid";

class DisplayWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           workExperience: props.workExperience,
        }
    }
    
    render() {
        return (
            <div id="displayWork">
               {this.state.workExperience.map(item => {
                return (
                <WorkItem   
                    key={uniqid()}
                    position={item.position}
                    organization={item.organization}
                    city= {item.city}
                    startDate= {item.startDate}
                    endDate= {item.endDate}
                    description={item.description} /> )})}
            </div>
        )
    }
}

export default DisplayWork;