import React from "react";

export default class SetState3 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }



    componentWillUpdate() {
        console.log('3 componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('3 componentDidUpdate');
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('3=>调用setState');
            this.setState({
                index: this.state.index + 1
            })
            console.log('3=>state', this.state.index);
            console.log('3=>调用setState');
            // this.setState({
            //     index: this.state.index + 1
            // })
            this.setState((...arg) => {
                console.log('updater', arg);
                return { index: 100 }
            })
            this.setState((state,props)=>{
                console.log('updater',state,props);
                return {index:1000}
            })
            console.log('3=>state', this.state.index);
        }, 0);
    }

    render() {
        console.log('now render');
        return <div>{`3=>${this.state.index}`}</div>
    }

}
