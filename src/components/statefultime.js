import React from 'react';


class StatefulTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            start: false,
        }
        setInterval(
            () => { 
                if (this.state.start) { 
                    this.setState({
                        timer: this.state.timer + 1,
                        hours: parseInt(this.state.timer/360000),
                        minutes: parseInt((this.state.timer%360000)/6000),
                        seconds: parseInt(((this.state.timer%360000)%6000)/100),
                    })
                }
            },
            10
            )
        }
        click = () => {
            this.state.start = !this.state.start
        }
        reset = () => {
            this.setState ({
                timer: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                start: false,
            })
        }

render() {
    return (
        <div className="container">
        <div className="timer">
            <div className="unit">
                <h2>{String(this.state.hours).padStart(2, '0')+':'}</h2>
                <p className="type">Hour</p>
            </div>
            <div className="unit">
                <h2>{String(this.state.minutes).padStart(2, '0')+':'} </h2>
                <p className="type">Minute</p>
            </div>
            <div className="unit">
                <h2> {String(this.state.seconds).padStart(2, '0')} </h2>
                <p className="type">Second</p>
            </div>
        </div>
        <div className="buttons">
            <button onClick={this.click}>{(!this.state.start)?'Start':'Pause'}</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    </div>
    )
}
}


export default StatefulTime;
