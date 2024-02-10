import PropTypes from 'prop-types';
import './CourseSection.css';
import CourseListRow from './CourseListRow';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getAllCourses } from '../selectors/courseSelector';

const CourseList = ({ listCourses = [], isLoggedIn, fetchCourses, selectCourse, unSelectCourse }) => {
    // Call fetchCourses when the component mounts
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Define the onChangeRow function
    const onChangeRow = (id, isChecked) => {
        if (isChecked) {
            selectCourse(id);
        } else {
            unSelectCourse(id);
        }
    };

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
                                isChecked={course.isSelected} // Assuming you have an isSelected attribute
                                onChangeRow={onChangeRow} // Pass onChangeRow to each CourseListRow
                            />
                        ))
                    )}
                </tbody>
            </table>
        </BodySectionWithMarginBottom>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.array, // Updated to a simple array since CourseShape is removed
    isLoggedIn: PropTypes.bool.isRequired,
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
    listCourses: [],
};

const mapStateToProps = (state) => {
    return {
        listCourses: getAllCourses(state), // Use the getAllCourses selector
    };
};

const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
