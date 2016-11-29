import React, { Component, PropTypes } from 'react';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillUpdate() {}

    componentDidUpdate() {}

    render() {
        return <h1>Hello</h1>;
    }
}

MyComponent.propTypes = {
    title: PropTypes.string.isRequired
};

MyComponent.defaultProps = {
    title: 'Title'
};
