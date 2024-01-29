// courses.js
import { normalize, schema } from 'normalizr';

// Define an entity schema for courses
const course = new schema.Entity('courses');

// Create a function coursesNormalizer that would take data as argument and normalize the data with the schema you created
export const coursesNormalizer = (data) => {
    return normalize(data, [course]);
}
