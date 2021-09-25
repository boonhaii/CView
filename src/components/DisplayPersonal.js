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
           <div id="displayPersonal"> 
               <h1 id="name">{this.state.firstName} {this.state.lastName} </h1>
                {this.state.email !== "" && this.state.phoneNumber !== ""
                    ? <p id="contact"> {this.state.email} | {this.state.phoneNumber} </p>
                    : <p id="contact"> {this.state.email} {this.state.phoneNumber}</p>}
            </div>
        
        )
    }
}

export default DisplayPersonal;