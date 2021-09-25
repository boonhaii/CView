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
                { position: "",
                organization: "",
                city: "",
                startDate: "",
                endDate: "",
                description:"" }
            ], // Array of objects which encapsulates work experience details.
            educationExperience: [
                {institution: "",
                city: "",
                qualifications: "",
                major: "",
                startDate: "",
                endDate: "",
                description:"" }
            ], // Array of objects which encapsulates education experience details.
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        }
        this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
        this.newWorkForm = this.newWorkForm.bind(this);
        this.newEduForm = this.newEduForm.bind(this);
        this.handleChangeWork = this.handleChangeWork.bind(this);
        this.handleChangeEdu = this.handleChangeEdu.bind(this);
        this.removeWorkItem = this.removeWorkItem.bind(this);
        this.removeEduItem = this.removeEduItem.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.loadExample = this.loadExample.bind(this);
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
            const newWorkTemplate = { position: "", organization: "", city: "", startDate: "", endDate: "", description: "" }
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
                endDate: "",
                description: "" }
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

    clearAll(event) {
        event.preventDefault();
        this.setState({     
            numWork: 1,
            numEducation: 1,
            workExperience: [
                { position: "",
                organization: "",
                city: "",
                startDate: "",
                endDate: "",
                description:"" }
            ], 
            educationExperience: [
                {institution: "",
                city: "",
                qualifications: "",
                major: "",
                startDate: "",
                endDate: "",
                description:"" }
            ], 
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
        })
    }

    loadExample(event) {
        event.preventDefault();
        this.setState({     
            firstName: "Nicole",
            lastName: "Bell",
            email: "nicole.bell@domain.com",
            phoneNumber: "+25 12345678",
            numWork: 3,
            numEducation: 2,
            workExperience: [{
                position: "Senior Software Developer",
                organization: "Amazin",
                city: "San Diego",
                startDate: "Jan 2020",
                endDate: "Present",
                description:"Led a team of 9 engineers to designa nd implement an error analaysis that reduced the development to production time for the mobile department by 35%\n"
                + "Designed a new messaging platform for users in a team of 3, with more than 1000 daily users\n"
                + "Solved many bugs :)"},
                {
                position: "Junior Software Developer",
                organization: "Googli",
                city: "California",
                startDate: "Jan 2015",
                endDate: "Jul 2017",
                description:"Led a team of 9 engineers to designa nd implement an error analaysis that reduced the development to production time for the mobile department by 35%\n"
                + "Designed a new messaging platform for users in a team of 3, with more than 1000 daily users\n"
                + "Solved many bugs :)"},
                {
                position: "Web Developer",
                organization: "MyWebsite",
                city: "San Francisco",
                startDate: "Jan 2012",
                endDate: "Dec 2014",
                description:"Led a team of 9 engineers to designa nd implement an error analaysis that reduced the development to production time for the mobile department by 35%\n"
                + "Designed a new messaging platform for users in a team of 3, with more than 1000 daily users\n"
                + "Solved many bugs :)"}
            ],
            educationExperience: [
                {institution: "University of Alma",
                city: "California",
                qualifications: "Bachelors",
                major: "Information Systems",
                startDate: "Jul 2008",
                endDate: "Dec 2011",
                description:"Grade Point Average: 3.9 (Out of 4.0)\n"
            + "Minor in Psychology\n"
            + "Attained Best Academic Result for Freshmen"},
                {institution: "University of Yuolo",
                city: "Beijing",
                qualifications: "Masters",
                major: "Data Analytics",
                startDate: "Jul 2017",
                endDate: "Dec 2019",
                description:"Grade Point Average: 3.9 (Out of 4.0)"}
            ]
        })
    }

    render() {
        return (
            <div id="page">
                <div id="Input">
                    <div id="Personal" className="InputComponent">
                        <p className="subheader"> Personal Info </p>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChangePersonalInfo} placeholder="First Name"></input> <br />
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChangePersonalInfo} placeholder="Last Name"></input> <br />
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChangePersonalInfo} placeholder="Email"></input> <br />
                        <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChangePersonalInfo} placeholder="Phone Number"></input> <br />
                    </div>
                    
                    <div id="Work" className="InputComponent">
                        <p className="subheader"> Work Experience </p>
                        {[...Array(this.state.numWork).keys()].map(index => { 
                            return (
                                <div>
                                    <form id="workform">
                                        <input type="text" id={index} name="position" value={this.state.workExperience[index].position} onChange={this.handleChangeWork} placeholder="Position" ></input> <br />
                                        <input type="text" id={index} name="organization" value={this.state.workExperience[index].organization} onChange={this.handleChangeWork} placeholder="Organization" ></input> <br />
                                        <input type="text" id={index} name="city" value={this.state.workExperience[index].city} onChange={this.handleChangeWork} placeholder="City"></input> <br />
                                        <div className="duration">
                                            <input type="text" id={index} name="startDate" value={this.state.workExperience[index].startDate} onChange={this.handleChangeWork} placeholder="Start Date" ></input> <br />
                                            <input type="text" id={index} name="endDate" value={this.state.workExperience[index].endDate} onChange={this.handleChangeWork} placeholder="End Date"></input> <br />
                                        </div>
                                        <textarea type="text" id={index} name="description" value={this.state.workExperience[index].description} onChange={this.handleChangeWork} placeholder="Briefly describe with pointers..."></textarea>
                                    </form>
                                    <button className="remove" id={index} onClick={this.removeWorkItem}> Remove </button>
                                </div>
                            )})}
                        <button onClick={this.newWorkForm}> Add </button>
                    </div>

                    <div id="Education" className="InputComponent">
                        <p className="subheader"> Education Experience </p>
                        {[...Array(this.state.numEducation).keys()].map(index => { 
                            return (
                                <div>
                                    <form id="eduform">
                                        <input type="text" id={index} name="institution" value={this.state.educationExperience[index].institution} onChange={this.handleChangeEdu} placeholder="Institution" ></input> <br />
                                        <input type="text" id={index} name="city" value={this.state.educationExperience[index].city} onChange={this.handleChangeEdu} placeholder="City" ></input> <br />
                                        <input type="text" id={index} name="qualifications" value={this.state.educationExperience[index].qualifications} onChange={this.handleChangeEdu} placeholder="Qualifications"></input> <br />
                                        <input type="text" id={index} name="major" value={this.state.educationExperience[index].major} onChange={this.handleChangeEdu} placeholder="Major"></input> <br />
                                        <div className="duration">
                                            <input type="text" id={index} name="startDate" value={this.state.educationExperience[index].startDate} onChange={this.handleChangeEdu} placeholder="Start Date" ></input> <br />
                                            <input type="text" id={index} name="endDate" value={this.state.educationExperience[index].endDate} onChange={this.handleChangeEdu} placeholder="End Date"></input> <br />
                                        </div>
                                        <textarea type="text" id={index} name="description" value={this.state.educationExperience[index].description} onChange={this.handleChangeEdu} placeholder="Briefly describe with pointers..."></textarea>
                                    </form>
                                    <button className="remove" id={index} onClick={this.removeEduItem}> Remove </button>
                                </div>
                            )})}
                        <button onClick={this.newEduForm}> Add </button>
                    </div>
                <br />
                <button className="globalbutton" id="clear" onClick={this.clearAll}>Clear</button>
                <button className="globalbutton" id="load" onClick={this.loadExample}>Load Example</button>
                <button className="globalbutton" id="generate" onClick={null}> Generate PDF </button>
                </div>
                <br />
                
                <div id="preview">
                    <Preview 
                        key={ uniqid() } // Component only rerenders if key ends up being different.
                        personalInfo={{
                        firstName:this.state.firstName, 
                        lastName: this.state.lastName, 
                        email: this.state.email, 
                        phoneNumber: this.state.phoneNumber}}
                        workExperience= {this.state.workExperience}
                        educationExperience = {this.state.educationExperience}
                        />
                </div>
            </div>
    )}
}

export default App;