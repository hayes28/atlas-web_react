// Create a BodySection component that contains a <h2> element containing a title passed as a prop under the h2 and children of BodySection.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';

class BodySection extends Component {
    render() {
        const { title, children } = this.props;
        return (
        <div className="bodySection">
            <h2>{title}</h2>
            {children}
        </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BodySection;

