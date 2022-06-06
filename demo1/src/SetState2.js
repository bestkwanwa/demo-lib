import React from "react";

export default class SetState2 extends React.Component {

    state = {
        index: 0
    }

    componentWillUpdate() {
        console.log('2 componentWillUpdate');
        // this.setState({ index: this.state.index + 1 })
    }

    componentDidUpdate() {
        console.log('2 componentDidUpdate');
    }

    // componentDidMount() {
    //     console.log('2 SetState调用setState');
    //     this.setState({
    //         index: this.state.index + 1
    //     })
    //     console.log('2 state', this.state.index);

    //     console.log('2 SetState调用setState');
    //     this.setState({
    //         index: this.state.index + 1
    //     })
    //     console.log('2 state', this.state.index);
    // }

    // componentDidMount() {
    //     this.setState({ index: this.state.index + 1 }, () => {
    //         console.log('2=>',this.state.index);
    //     })
    //     this.setState({ index: this.state.index + 1 }, () => {
    //         console.log('2=>',this.state.index);
    //     })
    // }

    // 拿到旧值
    componentDidMount() {
        // this.setState((preState) => ({ index: preState.index + 1 }), () => {
        //   console.log(this.state.index);
        // })
        // this.setState(preState => ({ index: preState.index + 1 }), () => {
        //   console.log(this.state.index);
        // })
        this.setState({
            index: this.state.index + 1
        })
    }



    render() {
        return <div>{`2=>${this.state.index}`}</div>
    }

}
