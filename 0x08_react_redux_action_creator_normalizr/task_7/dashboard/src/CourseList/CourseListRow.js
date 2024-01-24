import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CourseSection.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const [isChecked, setIsChecked] = useState(false);

    // Define a function to handle the checkbox change
    useEffect(() => {
        if (isChecked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [isChecked]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr>
                    <th colSpan="2" className='headerStyle'>
                        {textFirstCell}
                    </th>
                </tr>
            );
        }
        return (
            <tr className="column-headers">
                <th className={`headerStyle thFirstCell`}>{textFirstCell}</th>
                <th className={`headerStyle thSecondCell`}>{textSecondCell}</th>
            </tr>
        );
    }

    return (
        <tr className={`rowStyle ${isChecked ? 'rowChecked' : ''}`}>
            <td className='tdFirstCell'>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {textFirstCell}
            </td>
            <td className='tdSecondCell'>{textSecondCell}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
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
