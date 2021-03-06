import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 0,
    }

    styles = {
        fontSeight: 10,
        fontWeight: "bold"
    };

    render() {
        return (
            <div>
                <h1> Hello World</h1>
                <span style={ {fontSize: 30} } className="badge badge-primary m-2">{this.state.count}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>);
    }

}

export default Counter;