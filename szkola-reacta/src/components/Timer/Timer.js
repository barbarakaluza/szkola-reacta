import React from "react";




class Timer extends React.Component {

    state = {
        time: 0
    }


    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }


    render() {
        return (
            <div>
                <p>Sekundy od włączenia strony: {this.state.time} </p>
    
            </div>
        )

    }
    
}


export default Timer;