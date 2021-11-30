import React, { Component } from 'react'
import './Reminder.css';
import {setState} from "react";
class Reminder extends Component {
    static num;
    constructor(props){
        super(props);
        this.day=props.day;
        this.month=props.month;
        this.year=props.year;  
        this.weekDay=new Date(props.year, props.month, props.day).getDay();
        this.monthStr=[
            "Jan.",
            "Feb.",
            "Mar.",
            "Apr.",
            "May",
            "Jun.",
            "Jul.",
            "Aug.",
            "Sep.",
            "Oct.",
            "Nov.",
            "Dec."
        ]
        this.state={
            reminder:"",
        }
    }

    setReminder=(event)=>{
        this.setState({reminder:event.target.value})   
    }

    displayReminder=()=>{
        alert(this.state.reminder)
    }
    
    state = { showing: true }

    render() {
        const { showing } = this.state;
        return (
            <div className="Reminder">
                <br></br><br></br>
                <p><h1>{this.weekDay}</h1></p>
                <h1>{this.monthStr[this.month]} {this.day}, {this.year}</h1>
                <br></br>
                <h3>Reminders:</h3>
                <table id="reminder-list">
                    <col span="1" style={{width: "90%"}}/>
                    <col span="1" style={{width: "10%"}}/>
                    <tr>
                        <td>
                            Sample Reminder no.1
                        </td>
                        <td>
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => this.setState({ showing: !showing })}>Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sample Reminder no.2
                        </td>
                        <td>
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => this.setState({ showing: !showing })}>Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sample Reminder no.3
                        </td>
                        <td>
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => this.setState({ showing: !showing })}>Edit</button>
                        </td>
                    </tr>
                </table>
                <p>{this.state.reminder}</p>

                <button type="button" class="btn btn-primary btn-sm" onClick={() => this.setState({ showing: !showing })}>Add</button>

                <div class="container" id="container" style={{ display: (showing ? 'block' : 'none') }}>
                    <label for="show" class="close" onClick={() => this.setState({ showing: !showing })}>x</label>
                    <div class="text">
                        {this.monthStr[this.month]} {this.day}, {this.year}
                    </div>
                    <form action ="" id = "form" onsubmit="" method = "POST">
                        <div class="data">
                            <label>Reminder:</label>
                            <input type="text" name="firstName" id="firstName" require/>
                        </div>
                        <div class="data">
                            <label>Description</label>
                            <textarea type="text" name= "lastName" id="lastName" require/>
                        </div>
                        <div class="data-time">
                            <label>Time Start</label>
                            <input type="time"/>
                        </div>
                        <div class="data-time">
                            <label>Time End</label>
                            <input type="time"/>
                        </div>
                            <input type="text" hidden name= "id" id="id" require/>                                <input hidden name="edit-id" id="edit-id"/>
                        <div class="btn">
                            <input type="submit" name="btn" id="btn" value="Add"></input>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}



export default Reminder
