import React from "react";
import SetState from './SetState';
import SetState2 from './SetState2';
import SetState3 from './SetState3';

export default class App extends React.Component {
    componentDidMount() {
        console.log("parent componentDidMount");
    }
    
    render() {
        console.log('render!');
        return (
            <div>
                {/* <SetState3 name={'elvis'}></SetState3> */}
                {/* <SetState2></SetState2> */}
                <SetState></SetState>
            </div>
        );
    }
}
