import React from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';
import BodySection from '../BodySection/BodySection';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BodySectionWithMarginBottom;
