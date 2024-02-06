// SchoolNews.js

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    newsItem: {
        margin: '1rem 0',
        padding: '1rem',
        border: '2px solid #00003C',
        borderRadius: '5px',
        backgroundColor: '#fefae8',
    },
});

const SchoolNews = () => {
    return (
        <div>
            <article className={css(styles.newsItem)}>
                <h3>Whirling Widgets Win the Day!</h3>
                <p>In a surprising turn of events, the school's Whirling Widget team spiraled into victory at the annual Interdimensional Invention Fair. The team's creation, a combination of a spinning top and a weather vane, impressed judges with its ability to predict rain, shine, or a chance of flying frogs.</p>
            </article>
            <article className={css(styles.newsItem)}>
                <h3>Library's Books Buzz with Mystery</h3>
                <p>The school library reported a peculiar phenomenon last Tuesday. Books were found buzzing with whispers, sharing stories amongst themselves after hours. The librarian insists it's just a case of "literary enthusiasm," but some suspect the novels are planning a book club of their own.</p>
            </article>
            <article className={css(styles.newsItem)}>
                <h3>Cafeteria's New Dish: Invisible Pie</h3>
                <p>Chef Whiskwhirl introduced a new dessert this week: Invisible Pie. While some students were puzzled, others praised its "airy texture" and "zero-calorie delight." The pie has become so popular that it's always gone before you even see it!</p>
            </article>
            <article className={css(styles.newsItem)}>
                <h3>Physics Class Defies Gravity</h3>
                <p>Mrs. Fizzlepop's physics class made headlines by temporarily reversing gravity. Students spent the afternoon learning on the ceiling, an experience they found both enlightening and dizzying. The gravity was restored by the end of the period, but the day's lesson certainly left a lasting impression - and a few students wondering where their pencils went.</p>
            </article>
            <article className={css(styles.newsItem)}>
                <h3>Annual Time-Traveler Reunion a Success</h3>
                <p>Last weekend, the school hosted its 305th Annual Time-Traveler Reunion, with guests attending from various eras, both past and future. Highlights included a hoverboard showcase, a dinosaur petting zoo, and a keynote speech on the "Do's and Don'ts of Temporal Navigation." Attendees left before they arrived and arrived before they left, marking yet another successful, albeit confusing, event.</p>
            </article>
        </div>
    );
};

export default SchoolNews;
