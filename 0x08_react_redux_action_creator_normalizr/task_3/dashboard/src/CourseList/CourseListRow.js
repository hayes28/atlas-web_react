import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#f5f5f5ab'
    },
    headerStyle: {
        backgroundColor: '#deb5b545',
        textAlign: 'left'
    },
    thFirstCell: {
        width: '40%'
    },
    thSecondCell: {
        width: '60%'
    },
    tdFirstCell: {
        width: '40%',
        textAlign: 'left'
    },
    tdSecondCell: {
        width: '60%',
        textAlign: 'left'
    },
    rowChecked: {
        backgroundColor: '#e6e4e4'
    }
});

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
                    <th colSpan="2" className={css(styles.headerStyle)}>
                        {textFirstCell}
                    </th>
                </tr>
            );
        }
        return (
            <tr className="column-headers">
                <th className={css(styles.headerStyle)}>{textFirstCell}</th>
                <th className={css(styles.headerStyle)}>{textSecondCell}</th>
            </tr>
        );
    }

    return (
        <tr className={css(styles.rowStyle, isChecked && styles.rowChecked)}>
            <td>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {textFirstCell}
            </td>
            <td>{textSecondCell}</td>
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
