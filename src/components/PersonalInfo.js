import React from "react";

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.item.firstName,
            lastName: props.item.lastName,
            email: props.item.email,
            phoneNumber: props.item.phoneNumber
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.firstName} {this.state.lastName} </h1>
                {this.state.email !== "" && this.state.phoneNumber !== ""
                    ? <p> {this.state.email} | {this.state.phoneNumber} </p>
                    : <p> {this.state.email}{this.state.phoneNumber} </p>}
                
            </div>
        )
    }
}

export default PersonalInfo;