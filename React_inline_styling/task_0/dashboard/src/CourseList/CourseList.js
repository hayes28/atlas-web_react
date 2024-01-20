// CourseList.js
import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell='No course available yet' isHeader={false} />
                ) : (
                        listCourses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                id={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                                isHeader={false}
                            />
                        ))
                    )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;

