import React from "react";

export default class SetState extends React.Component {

    state = {
        index: 0
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentDidMount() {
        // console.log('SetState调用setState');
        // this.setState({
        //     index: this.state.index + 1
        // })
        // console.log('state', this.state.index);

        // console.log('SetState调用setState');
        // this.setState({
        //     index: this.state.index + 1
        // })
        // console.log('state', this.state.index);
        setTimeout(() => {
            this.setState({
                index: this.state.index + 1
            })
        }, 3000);
        // this.setState({
        //     index: this.state.index + 1
        // })
    }

    render() {
        console.log('now render!');
        return <div>{`1=>${this.state.index}`}</div>
    }

}
