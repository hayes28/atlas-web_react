import React from 'react';
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
    }
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader) {
        return (
            <tr className={css(styles.headerStyle)}>
                {textSecondCell === null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ) : (
                    <>
                        <th className={css(styles.thFirstCell)}>{textFirstCell}</th>
                        <th className={css(styles.thSecondCell)}>{textSecondCell}</th>
                    </>
                )}
            </tr>
        );
    } else {
        return (
            <tr className={css(styles.rowStyle)}>
                <td className={css(styles.tdFirstCell)}>{textFirstCell}</td>
                <td className={css(styles.tdSecondCell)}>{textSecondCell}</td>
            </tr>
        );
    }
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
