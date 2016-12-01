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
        return <div>Hello</div>;
    }
}

MyComponent.propTypes = {
    title: PropTypes.string.isRequired
};

MyComponent.defaultProps = {
    title: 'Title'
};
