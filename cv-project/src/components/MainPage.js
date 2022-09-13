import React, { Component } from 'react'
import './Contact.css'
import './Work.css'




class MainPage extends Component {


  submitHandler = event => {
    console.log("hello");
  }

  render() {
    return (
      
            <div>
              <div className='TopContainer'>
                  <img src='https://samyak-268.github.io/static/img/ico/resume-logo.png' className='Resume-Img'></img>
                  <div className='TopHeader'>
                      <div>Resume Builder</div>
                  </div>
                  <div className='ButtonContainer'>
                      <button className='Submit' onClick={this.submitHandler}><div>Save</div></button>
                      <button className='Preview'><div>Pre</div></button>
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
                                    <input type='text'></input>
                                  </div>
                                  <div>
                                    <label>Last Name</label>
                                    <input type='text'></input>
                                  </div>
                                  <div>
                                    <label>Email</label>
                                    <input type='text'></input>
                                  </div>
                                  <div>
                                    <label>Phone Number</label>
                                    <input type='text'></input>
                                  </div>
                              </div>
                              <div className='RightContact'>
                                  <div>
                                    <label>Address</label>
                                    <input type='text'></input>
                                  </div>
                                  <div>
                                    <label>Github</label>
                                    <input type='text'></input>
                                  </div>
                                  <div>
                                    <label>Discord</label>
                                    <input type='text'></input>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='Categories'>
                        <p className='Header'>Contact Information</p>
                        <div className='Grouping'>
                          <div className='Questions'>
                            <div>
                              <label>Company</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>City</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>Role</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>From</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>To</label>
                              <input type="text" ></input>
                            </div>
                          </div>
                            <div className='Desc'>
                              <label>Description</label>
                              <textarea ></textarea>
                            </div>
                        </div>
                      </div>
                      <div className='Categories'>
                      <p className='Header'>Education</p>
                      <div className='Grouping'>
                          <div className='Questions'>
                            <div>
                              <label>School</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>City</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>From</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>To</label>
                              <input type="text" ></input>
                            </div>
                            <div>
                              <label>Degree</label>
                              <input type="text" ></input>
                            </div>
                          </div>
                            <div className='Desc'>
                              <label>Skills and Achievements</label>
                              <textarea></textarea>
                            </div>
                        </div>
                      </div>
                      <div className='Categories'>
                      <p className='Header'>Education</p>
                          <div className='SkillDesc'>
                            <label>Skills and Achievements</label>
                            <textarea></textarea>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    )
  }
}

export default MainPage