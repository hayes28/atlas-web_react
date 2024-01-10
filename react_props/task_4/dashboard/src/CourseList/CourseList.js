// CourseList.js
import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';

const CourseList = () => {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
            </thead>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
            </tbody>
        </table>
    );
};

export default CourseList;

