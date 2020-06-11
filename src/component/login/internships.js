import React from "react";

export class Internships extends React.Component {

    constructor(props) {
    super(props);
}

render() {
    return (
    <div className="base-container" ref={this.props.containerRef}>
        <div className="header"><h2>Internships</h2></div>
        <div className="content">
           <h4>Join the dream team!</h4>
           <h3>APPLICATION FORM</h3>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email ID</label>
                    <input type="email" name="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Mobile Number</label>
                    <input type="number" name="number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">College</label>
                    <input type="text" name="college"/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Year</label>
                    <input type="number" name="year"/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Branch/Department</label>
                    <input type="text" name="branch"/>
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">
                Upload CV(PDF/Jpeg format)
                </button>
        </div>
        <div className="footer1">
            <div className="leftcheckboxes">
            <div className="checkboxes1">
            <input type="checkbox" name="back-end-developer"/>
        <label htmlFor="checkbox">Back-End Developer</label>
         </div>
         <div className="checkboxes1">
         <input type="checkbox" name="app/iOS developer"/>
        <label htmlFor="checkbox">App/iOS Developer</label>
         </div>
         <div className="checkboxes1">
         <input type="checkbox" name="business development"/>
        <label htmlFor="checkbox">Business Development</label>
         </div>
         <div className="checkboxes1">
         <input type="checkbox" name="operations"/>
        <label htmlFor="checkbox">Operations</label>
         </div>
         <div className="checkboxes1">
         <input type="checkbox" name="design"/>
        <label htmlFor="checkbox">Design</label>
         </div>
         <div className="checkboxes1">
         <input type="checkbox" name="video/graphics design"/>
        <label htmlFor="checkbox">Video/Graphics Design</label>
         </div>
         </div>
         <div className="rightcheckboxes">
         <div className="checkboxes2">
         <input type="checkbox" name="front-end developer"/>
        <label htmlFor="checkbox">Front-End Developer</label>
         </div>
         <div className="checkboxes2">
         <input type="checkbox" name="marketing"/>
        <label htmlFor="checkbox">Marketing</label>
         </div>
         <div className="checkboxes2">
         <input type="checkbox" name="sales"/>
        <label htmlFor="checkbox">Sales</label>
         </div>
         <div className="checkboxes2">
         <input type="checkbox" name="machine learning/API"/>
        <label htmlFor="checkbox">Machine Learning/API</label>
         </div>
         <div className="checkboxes2">
         <input type="checkbox" name="data analyst"/>
        <label htmlFor="checkbox">Data Analyst</label>
         </div>
         <div className="checkboxes2">
         <input type="checkbox" name="accounts"/>
        <label htmlFor="checkbox">Accounts</label>
         </div>
         </div>
        </div>
        <div className="footer2">
            <button type="button" className="btn">
                Submit
                </button>
        </div>
    </div>
    );
}

}