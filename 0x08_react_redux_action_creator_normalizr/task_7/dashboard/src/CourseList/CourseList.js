// CourseList.js
import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import './CourseSection.css';
import CourseListRow from './CourseListRow';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const CourseList = ({ listCourses = [], isLoggedIn }) => {
    return (
        <BodySectionWithMarginBottom title='Course List'>
            <table id='CourseList' className={`table ${isLoggedIn ? 'loggedInStyle' : ''}`}>
                <thead>
                    <tr>
                        {isLoggedIn && <th></th>}
                        <th className='th CourseListRowHeader thFirstChild'>Available courses</th>
                        <th className='th thLastChild'>Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {listCourses.length === 0 ? (
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
                                isLoggedIn={isLoggedIn}
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

