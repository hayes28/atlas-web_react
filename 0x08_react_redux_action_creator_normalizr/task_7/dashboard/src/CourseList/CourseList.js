// CourseList.js
import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const styles = StyleSheet.create({
    th: {
        width: '100%',
        border: '1px solid #00003C',
        borderCollapse: 'collapse',
    },
    thNthChild2: {
        ':nth-child(2)': {
            borderTop: '2px solid #00003C',
        },
    },
    table: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        border: '1px solid #00003C',
        borderCollapse: 'collapse',
        width: '90%',
        margin: 'auto',
        marginTop: '50px',
        fontWeight: '400',
        padding: '0.5rem',
    },
    CourseListRowHeader: {
        textAlign: 'center',
    },
    thFirstChild: {
        ':first-child': {
            textAlign: 'left',
            width: '30%',
        },
    },

    thLastChild: {
        ':last-child': {
            textAlign: 'left',
            width: '30%',
    },
        loggedInStyle: {
            marginTop: '50px',
        },
},

});

const CourseList = ({ listCourses = [], isLoggedIn }) => {
    return (
        <BodySectionWithMarginBottom title='Course list'>
            <table id='CourseList' className={css(styles.table, isLoggedIn && styles.loggedInStyle)}>
                <thead>
                    <tr>
                        {/* Conditionally render an empty th if logged in to align the headers */}
                        {isLoggedIn && <th></th>}
                        <th className={css(styles.th, styles.CourseListRowHeader, styles.thFirstChild)}>Available courses</th>
                        <th className={css(styles.th, styles.thLastChild)}>Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {listCourses.length === 0 ? (
                        // Conditionally render an empty td if logged in to align the course row
                        <CourseListRow
                            textFirstCell="No course available yet"
                            isHeader={false}
                            isLoggedIn={isLoggedIn}
                        />
                    ) : (
                        listCourses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={String(course.credit)}
                                isHeader={false}
                                isLoggedIn={isLoggedIn} // pass isLoggedIn to each row
                            />
                        ))
                    )}
                </tbody>
            </table>
        </BodySectionWithMarginBottom>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;

