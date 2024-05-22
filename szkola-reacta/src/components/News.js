import React from "react";

// function News({ header, intro }) {
//     return (
//         <div>
//             <h2>{header}</h2>
//             <p>{intro}</p>
//         </div>
//     )
// }


class News extends React.Component {
    state = {
        score: 5,
    }

    componentDidMount() {
        this.setState({ score: 1 })
    }
    
    render() {
        const { header, intro }  = this.props;
        const { score } = this.state;
        return (
            <div>
                <h2>{header}</h2>
                <p>{intro}</p>
                <p>{score}</p>
            </div>
        )
    }
}
export default News;