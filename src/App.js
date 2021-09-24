//import { render } from '@testing-library/react';
import React from "react"
import Preview from "./components/Preview";
import uniqid from "uniqid";
import WorkForm from "./components/WorkForm";
import "./App.css";


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            workExperience: [], // Array of objects which encapsulates work experience details.
            educationExperience: [], // Array of objects which encapsulates education experience details.
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }
        this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);
    }
                
    handleChangePersonalInfo(event) {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    /*handleChangeWorkExperience(event) {
        event.preventDefault();
        this.setState(prevState => {
            const updatedArray = [...prevState.workExperience];
            updatedArray.push(workItem);
            return {
                workExperience: updatedArray
            }
        })
    }*/

    handleClearAll(event) {
        this.setState({     
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            workExperience: [],
            educationExperience: []
        })
    }

    render() {
        return (
            <main>
                <div id="Input">
                    <header> CV Builder </header>
                    <div id="Personal" className="InputComponent">
                        <h2> Personal Info </h2>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangePersonalInfo} placeholder="First Name"></input> <br />
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangePersonalInfo} placeholder="Last Name"></input> <br />
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChangePersonalInfo} placeholder="Email"></input> <br />
                        <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChangePersonalInfo} placeholder="Phone Number"></input> <br />
                    </div>
                    
                    <div id="Work" className="InputComponent">
                        <h2> Work Experience </h2>
                        {Array.from({length: this.state.workExperience.length + 1})
                                .map(index => <WorkForm id={index} />)}

                        <button hand> Add </button>

                       
                    </div>

                <Preview 
                key={ uniqid() } // Component only rerenders if key ends up being different.
                personalInfo={{
                    firstName:this.state.firstName, 
                    lastName: this.state.lastName, 
                    email: this.state.email, 
                    phoneNumber: this.state.phoneNumber}} 
                className="preview" />

                <button onClick={this.handleClearAll}>Clear All</button>
            </div>
        </main>
    )}
}

export default App;