import React from "react";
import uniqid from "uniqid";
import Preview from "./components/Preview"
import "./App.css";


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            numWork: 1,
            numEducation: 1,
            workExperience: [
                { isRemoved: false,
                position: "",
                organization: "",
                city: "",
                startDate: "",
                endDate: "" }
            ], // Array of objects which encapsulates work experience details.
            educationExperience: [
                { isRemoved: false,
                institution: "",
                city: "",
                qualifications: "",
                major: "",
                startDate: "",
                endDate: "" }
            ], // Array of objects which encapsulates education experience details.
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }
        this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
        this.handleClearAll = this.handleClearAll.bind(this);
        this.newWorkForm = this.newWorkForm.bind(this);
        this.newEduForm = this.newEduForm.bind(this);
        this.handleChangeWork = this.handleChangeWork.bind(this);
        this.handleChangeEdu = this.handleChangeEdu.bind(this);
        this.removeWorkItem = this.removeWorkItem.bind(this);
        this.removeEduItem = this.removeEduItem.bind(this);
    }
                
    handleChangePersonalInfo(event) {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    newWorkForm(event) {
        event.preventDefault();
        this.setState(prevState => {
            const newWorkTemplate = { position: "", organization: "", city: "", startDate: "", endDate: "" }
            const updatedWorkExperience = [...prevState.workExperience]
            updatedWorkExperience.push(newWorkTemplate)
            return ({
                workExperience: updatedWorkExperience,
                numWork: prevState.numWork + 1
            })
        })
    }

    newEduForm(event) {
        event.preventDefault();
        this.setState(prevState => {
            const newEduTemplate = {
                institution: "",
                city: "",
                qualifications: "",
                major: "",
                startDate: "",
                endDate: "" }
            const updatedEducationExperience = [...prevState.educationExperience]
            updatedEducationExperience.push(newEduTemplate)
            return ({
                educationExperience: updatedEducationExperience,
                numEducation: prevState.numEducation + 1
            })
        })
    }

    removeWorkItem(event) {
        event.preventDefault();
        const {id} = event.target;
        this.setState(prevState => {
            let updatedWorkExperience = [...prevState.workExperience];
            updatedWorkExperience.splice(id, 1)
            return {
                workExperience: updatedWorkExperience,
                numWork: prevState.numWork - 1
            }
        })
    }

    removeEduItem(event) {
        event.preventDefault();
        const {id} = event.target;
        this.setState(prevState => {
            let updatedEduExperience = [...prevState.educationExperience];
            updatedEduExperience.splice(id, 1)
            return {
                educationExperience: updatedEduExperience,
                numEducation: prevState.numEducation - 1
            }
        })
    }

    handleChangeWork(event) {
        const {name, value, id} = event.target;
        this.setState(prevState => {
            const updatedWorkExperience = [...prevState.workExperience];
            updatedWorkExperience[id] = {
                ...updatedWorkExperience[id],
                [name] : value
            }
            return {
                workExperience: updatedWorkExperience
            }
        })
    }

    handleChangeEdu(event) {
        const {name, value, id} = event.target;
        this.setState(prevState => {
            const updatedEducationExperience = [...prevState.educationExperience];
            updatedEducationExperience[id] = {
                ...updatedEducationExperience[id],
                [name] : value
            }
            return {
                educationExperience: updatedEducationExperience
            }
        })
    }

    handleClearAll(event) {
        this.setState({     
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            numWork: 1,
            numExperience: 1,
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
                        {[...Array(this.state.numWork).keys()]
                                .map(index => { 
                                    return (
                                       <div>
                                            <form id="workform">
                                                <input type="text" id={index} name="position" value={this.state.workExperience[index].position} onChange={this.handleChangeWork} placeholder="Position" ></input> <br />
                                                <input type="text" id={index} name="organization" value={this.state.workExperience[index].organization} onChange={this.handleChangeWork} placeholder="Organization" ></input> <br />
                                                <input type="text" id={index} name="city" value={this.state.workExperience[index].city} onChange={this.handleChangeWork} placeholder="City"></input> <br />
                                                <input type="text" id={index} name="startDate" value={this.state.workExperience[index].startDate} onChange={this.handleChangeWork} placeholder="Start Date" ></input> <br />
                                                <input type="text" id={index} name="endDate" value={this.state.workExperience[index].endDate} onChange={this.handleChangeWork} placeholder="End Date"></input> <br />
                                            </form>
                                            <button id={index} onClick={this.removeWorkItem}> Remove </button>
                                        </div>
                                    )
                                })}
                        <button onClick={this.newWorkForm}> Add </button>
                    </div>

                    <div id="Education" className="InputComponent">
                        <h2> Education Experience </h2>
                        {[...Array(this.state.numEducation).keys()]
                                .map(index => { 
                                    return (
                                        <div>
                                            <form id="eduform">
                                                <input type="text" id={index} name="institution" value={this.state.educationExperience[index].institution} onChange={this.handleChangeEdu} placeholder="Institution" ></input> <br />
                                                <input type="text" id={index} name="city" value={this.state.educationExperience[index].city} onChange={this.handleChangeEdu} placeholder="City" ></input> <br />
                                                <input type="text" id={index} name="qualifications" value={this.state.educationExperience[index].qualifications} onChange={this.handleChangeEdu} placeholder="Qualifications"></input> <br />
                                                <input type="text" id={index} name="major" value={this.state.educationExperience[index].major} onChange={this.handleChangeEdu} placeholder="Major"></input> <br />
                                                <input type="text" id={index} name="startDate" value={this.state.educationExperience[index].startDate} onChange={this.handleChangeEdu} placeholder="Start Date" ></input> <br />
                                                <input type="text" id={index} name="endDate" value={this.state.educationExperience[index].endDate} onChange={this.handleChangeEdu} placeholder="End Date"></input> <br />
                                            </form>
                                            <button id={index} onClick={this.removeEduItem}> Remove </button>
                                        </div>
                                    )
                                })}
                        <button onClick={this.newEduForm}> Add </button>
                    </div>

                <Preview 
                    key={ uniqid() } // Component only rerenders if key ends up being different.
                    personalInfo={{
                    firstName:this.state.firstName, 
                    lastName: this.state.lastName, 
                    email: this.state.email, 
                    phoneNumber: this.state.phoneNumber}}
                    workExperience= {this.state.workExperience}
                    educationExperience = {this.state.educationExperience}
                    className="preview" />

            </div>
        </main>
    )}
}

export default App;