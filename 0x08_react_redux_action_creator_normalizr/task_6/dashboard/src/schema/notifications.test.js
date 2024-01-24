// notifications.test.js
import {getAllNotificationsByUser, normalizedData} from './notifications';


describe('getAllNotificationsByUser', () => {
    it('returns the correct number of notifications', () => {
        const userId = '5debd764a7c57c7839d722e9';
        const expected = [
            {
                guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
                isRead: true,
                type: 'urgent',
                value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            },
            {
                guid: '280913fe-38dd-4abd-8ab6-acdb4105f922',
                isRead: false,
                type: 'urgent',
                value:
                    'Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed',
            },
        ];
        const actual = getAllNotificationsByUser(userId);
        expect(actual).toEqual(expected);
    });

    // Tests for task 1
    describe('Normalized Data', () => {
        it('contains correct result array', () => {
            expect(normalizedData.result).toEqual(expect.arrayContaining([
                "5debd76480edafc8af244228",
                // ... other IDs
            ]));
        });

        it('has correct users entity for user with id 5debd764a7c57c7839d722e9', () => {
            expect(normalizedData.entities.users['5debd764a7c57c7839d722e9']).toEqual({
                age: 25,
                email: "poole.sanders@holberton.nz",
                id: "5debd764a7c57c7839d722e9",
                name: { first: "Poole", last: "Sanders" },
                picture: "http://placehold.it/32x32"
            });
        });

        it('has correct messages entity for message with guid efb6c485-00f7-4fdf-97cc-5e12d14d6c41', () => {
            expect(normalizedData.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41']).toEqual({
                guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
                isRead: false,
                type: "default",
                value: "Cursus risus at ultrices mi."
            });
        });

        it('has correct notifications entity for notification with id 5debd7642e815cd350407777', () => {
            expect(normalizedData.entities.notifications['5debd7642e815cd350407777']).toEqual({
                author: "5debd764f8452ef92346c772",
                context: "3068c575-d619-40af-bf12-dece1ee18dd3",
                id: "5debd7642e815cd350407777"
            });
        });
    });
});
