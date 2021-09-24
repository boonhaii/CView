import React from "react";

class DisplayPersonal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.personalInfo.firstName,
            lastName: props.personalInfo.lastName,
            email: props.personalInfo.email,
            phoneNumber: props.personalInfo.phoneNumber
        }
    }

    render() {
        return (    
           <div> 
               <h2>{this.state.firstName} {this.state.lastName} </h2>
                {this.state.email !== "" && this.state.phoneNumber !== ""
                    ? <p> {this.state.email} | {this.state.phoneNumber} </p>
                    : <p> {this.state.email} {this.state.phoneNumber}</p>}
            </div>
        
        )
    }
}

export default DisplayPersonal;