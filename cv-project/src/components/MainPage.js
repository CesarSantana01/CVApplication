import React, { Component } from 'react'
import './Contact.css'
import './Work.css'
import './Preview.js'




class MainPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       FirstName:'',
       LastName:'',
       Email:'',
       PhoneNumber:'',
       Address:'',
       Github:'',
       LinkedIn:'',

      CompanyName:'',
      CompanyCity:'',
      CompanyRole:'',
      CompanyStart:'',
      CompanyEnd:'',
      CompanyJobDescription:'',

      SchoolName:'',
      SchoolCity:'',
      SchoolFrom:'',
      SchoolEnd:'',
      SchoolDegree:'',
      SchoolAchievementsDescription:'',

      SkillsDescription:''

    }
  }

  handleFirstNameChange = (event) =>{
    this.setState({
      FirstName: event.target.value
    })
  }
  handleLastNameChange = (event) =>{
    this.setState({
      LastName:event.target.value
    })
  }
  handleEmailChange = (event) =>{
    this.setState({
      Email:event.target.value
    })
  }
  handlePhoneNumberChange = (event) =>{
    this.setState({
      PhoneNumber:event.target.value
    })
  }
  handleAddressChange = (event) =>{
    this.setState({
      Address:event.target.value
    })
  }
  handleGithubChange = (event) =>{
    this.setState({
      Github:event.target.value
    })
  }
  handleLinkedInChange = (event) =>{
    this.setState({
      LinkedIn:event.target.value
    })
  }

  handleCompanyNameChange = (event) =>{
    this.setState({
      CompanyName:event.target.value
    })
  }
   handleCompanyCityChange = (event) =>{
    this.setState({
      CompanyCity:event.target.value
    })
  }
  handleCompanyRoleChange = (event) =>{
    this.setState({
      CompanyRole:event.target.value
    })
  }
  handleCompanyStartChange = (event) =>{
    this.setState({
      CompanyStart:event.target.value
    })
  }
  handleCompanyEndChange = (event) =>{
    this.setState({
      CompanyEnd:event.target.value
    })
  }
  handleCompanyJobDescriptionChange = (event) =>{
    this.setState({
      CompanyJobDescription:event.target.value
    })
  }
  handleSchoolNameChange = (event) =>{
    this.setState({
      SchoolName:event.target.value
    })
  }
  handleSchoolCityChange = (event) =>{
    this.setState({
      SchoolCity:event.target.value
    })
  }
  handleSchoolStartChange = (event) =>{
    this.setState({
      SchoolStart:event.target.value
    })
  }
  handleSchoolEndChange = (event) =>{
    this.setState({
      SchoolEnd:event.target.value
    })
  }
  handleSchoolDegreeChange = (event) =>{
    this.setState({
      SchoolDegree:event.target.value
    })
  }
  handleSchoolAchievementsDescriptionChange = (event) =>{
    this.setState({
      SchoolAchievementsDescription:event.target.value
    })
  }

  handleSkillsDescriptionChange = (event) =>{
    this.setState({
      SkillsDescription:event.target.value
    })
  }

  ChangeDisplay1 = () => {
    const preview = document.querySelector(".PreviewContainer")
    const edit = document.querySelector(".View1")
    edit.style.display = "none"
    preview.style.display = "flex"
  }

  ChangeDisplay2 = () =>{
    const preview = document.querySelector(".PreviewContainer")
    const edit = document.querySelector(".View1")
    preview.style.display = "none" 
    edit.style.display = "block"
  }

  setColor(color){
    const border1 = document.querySelector(':root')
    border1.style = `--ColorChange:${color}`
  }
  
  render() {
    const {
       FirstName,
       LastName,
       Email,
       PhoneNumber,
       Address,
       Github,
       LinkedIn,

      CompanyName,
      CompanyCity,
      CompanyRole,
      CompanyStart,
      CompanyEnd,
      CompanyJobDescription,

      SchoolName,
      SchoolCity,
      SchoolStart,
      SchoolEnd,
      SchoolDegree,
      SchoolAchievementsDescription,

      SkillsDescription

    } = this.state

    return (
            <div className='MAIN'>
              <div className='View1'>
                <div className='TopContainer'>
                    <img src='https://samyak-268.github.io/static/img/ico/resume-logo.png' className='Resume-Img'></img>
                    <div className='TopHeader'>
                        <div>Resume Builder</div>
                    </div>
                    <div className='ButtonContainer1'>
                        <button className='Preview' onClick={this.ChangeDisplay1}><div>Pre</div></button>
                    </div>
                </div>
                <div className='ResumeCont'>
                    <div className='Resume'>
                        <div className='Categories'>
                            <p className='Header'>Contact Information</p>
                            <div className='Grouping'>
                                <div className='LeftContact'>
                                    <div>
                                      <label>First Name</label>
                                      <input type='text' value={FirstName} onChange={this.handleFirstNameChange}></input>
                                    </div>
                                    <div>
                                      <label>Last Name</label>
                                      <input type='text' value={LastName} onChange={this.handleLastNameChange}></input>
                                    </div>
                                    <div>
                                      <label>Email</label>
                                      <input type='text' value={Email} onChange={this.handleEmailChange}></input>
                                    </div>
                                    <div>
                                      <label>Phone Number</label>
                                      <input type='text' value={PhoneNumber} onChange={this.handlePhoneNumberChange}></input>
                                    </div>
                                </div>
                                <div className='RightContact'>
                                    <div>
                                      <label>Address</label>
                                      <input type='text' value={Address} onChange={this.handleAddressChange}></input>
                                    </div>
                                    <div>
                                      <label>Github</label>
                                      <input type='text' value={Github} onChange={this.handleGithubChange}></input>
                                    </div>
                                    <div>
                                      <label>LinkedIn</label>
                                      <input type='text' value={LinkedIn} onChange={this.handleLinkedInChange}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Categories'>
                          <p className='Header'>Experience</p>
                          <div className='Grouping'>
                            <div className='Questions'>
                              <div>
                                <label>Company</label>
                                <input type="text" value={CompanyName} onChange={this.handleCompanyNameChange} ></input>
                              </div>
                              <div>
                                <label>City</label>
                                <input type="text" value={CompanyCity} onChange={this.handleCompanyCityChange}></input>
                              </div>
                              <div>
                                <label>Role</label>
                                <input type="text" value={CompanyRole} onChange={this.handleCompanyRoleChange}></input>
                              </div>
                              <div>
                                <label>Start</label>
                                <input type="text" value={CompanyStart} onChange={this.handleCompanyStartChange}></input>
                              </div>
                              <div>
                                <label>End</label>
                                <input type="text" value={CompanyEnd} onChange={this.handleCompanyEndChange}></input>
                              </div>
                            </div>
                              <div className='Desc'>
                                <label>Job Description</label>
                                <textarea value={CompanyJobDescription} onChange={this.handleCompanyJobDescriptionChange} ></textarea>
                              </div>
                          </div>
                        </div>
                        <div className='Categories'>
                        <p className='Header'>Education</p>
                        <div className='Grouping'>
                            <div className='Questions'>
                              <div>
                                <label>School</label>
                                <input type="text" value={SchoolName} onChange={this.handleSchoolNameChange}></input>
                              </div>
                              <div>
                                <label>City</label>
                                <input type="text" value={SchoolCity} onChange={this.handleSchoolCityChange}></input>
                              </div>
                              <div>
                                <label>Degree</label>
                                <input type="text" value={SchoolDegree} onChange={this.handleSchoolDegreeChange}></input>
                              </div>
                              <div>
                                <label>Start</label>
                                <input type="text" value={SchoolStart} onChange={this.handleSchoolStartChange}></input>
                              </div>
                              <div>
                                <label>End</label>
                                <input type="text" value={SchoolEnd} onChange={this.handleSchoolEndChange}></input>
                              </div>
                            </div>
                              <div className='Desc'>
                                <label>Skills and Achievements</label>
                                <textarea value={SchoolAchievementsDescription} onChange={this.handleSchoolAchievementsDescriptionChange}></textarea>
                              </div>
                          </div>
                        </div>
                        <div className='Categories'>
                        <p className='Header'>Education</p>
                            <div className='SkillDesc'>
                              <label>Skills</label>
                              <textarea value={SkillsDescription} onChange={this.handleSkillsDescriptionChange}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className='View2'>
                <div className='PreviewContainer'>
                  <div className='ButtonContainer2'>
                    <div className='Accent'>Accent</div>
                    <button onClick={this.setColor.bind(this, 'black')}><div>Black</div></button>
                    <button onClick={this.setColor.bind(this, 'red')}><div>Red</div></button>
                    <button onClick={this.setColor.bind(this, 'rgb(247, 130, 149)')}><div>Pink</div></button>
                    <button onClick={this.setColor.bind(this, 'navy')}><div>Navy</div></button>
                    <button onClick={this.setColor.bind(this, 'purple')}><div>Purple</div></button>
                    <button onClick={this.setColor.bind(this, 'rgb(3, 71, 3)')}><div>Green</div></button>
                    <button onClick={this.setColor.bind(this, 'grey')}><div>Grey</div></button>
                    <button onClick={this.setColor.bind(this, 'none')}><div>none</div></button>

                    <button onClick={this.ChangeDisplay2} className='EditButton'><div>Edit</div></button>
                  </div>
                <div className='PreviewPaper'>
                  <div className='PreviewContactInformation'>
                    <div className='PreviewName'>{FirstName} {LastName}</div>
                    <div className='GroupContainer'>
                      <div className='LineUp'>
                        <div className='PreviewPhone'>{PhoneNumber}</div>
                        <div className='PreviewEmail'>{Email}</div>
                      </div>
                      <div className='PreviewAddress'>{Address}</div>
                    </div>
                    <div className='MiniContainer'>
                      <div className='PreviewGithub'><img className='OutletImg' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img>{Github}</div>
                      <div className='PreviewLinkedIn'><img className='OutletImg' src='https://cdn-icons-png.flaticon.com/512/49/49656.png'></img>{LinkedIn}</div>
                    </div>
                  </div>
                  <div className='PreviewExperience'>
                        <div className='CompanyMiniContainer'>
                          <div>
                            <div className='CompanyName'>{CompanyName}</div>
                            <div className='CompanyCity'>{CompanyCity}</div>
                          </div>
                          <div>
                            <div className='CompanyRole'>{CompanyRole}</div>
                            <div className='CompanyDate'>{CompanyStart} <span style={{color:"var(--ColorChange)"}}>~</span> {CompanyEnd}</div>
                          </div>
                        </div>
                        <div className='CompanyMiniContainer2'>
                          <div className='CompanyDescription'>{CompanyJobDescription}</div>
                        </div>
                  </div>
                  <div className='PreviewEducation'>
                  <div className='SchoolMiniContainer'>
                          <div>
                            <div className='SchoolName'>{SchoolName}</div>
                            <div className='SchoolCity'>{SchoolCity}</div>
                          </div>
                          <div>
                            <div className='SchoolDegree'>{SchoolDegree}</div>
                            <div className='SchoolDate'>{SchoolStart}<span  style={{color:"var(--ColorChange)"}}> ~ </span>{SchoolEnd}</div>
                          </div>
                        </div>
                        <div className='SchoolMiniContainer2'>
                          <div className='SchoolDescription'>{SchoolAchievementsDescription}</div>
                        </div>
                  </div>
                  <div className='PreviewSkills'>
                    <div className='SkillsContainer'>
                      <div className='SkillsDescription'>{SkillsDescription}</div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
    )
  }
}

export default MainPage