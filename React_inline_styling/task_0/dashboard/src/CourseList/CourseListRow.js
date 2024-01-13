// CourseListRow.js - React component that accepts three props: textFirstCell, textSecondCell, and isHeader.
import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    // Define the styles as constants
    const headerStyle = {
        backgroundColor: '#deb5b545'
    };

    const rowStyle = {
        backgroundColor: '#f5f5f5ab'
    };

    // Use the isHeader prop to determine which style to use
    const styleToUse = isHeader ? headerStyle : rowStyle;

    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr style={styleToUse}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            );
        } else {
            return (
                <tr style={styleToUse}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else {
        return (
            <tr style={styleToUse}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    };
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export default CourseListRow;

