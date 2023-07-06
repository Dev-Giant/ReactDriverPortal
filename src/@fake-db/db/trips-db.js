import _ from '@lodash';
import mock from '../mock';

export const tripDb = {
    trips: [
        {
            id: 9632,
            orders: [
                { type: 'Pickup', address: 'Alpharetta, GA', date: '04/29' },
                { type: 'Delivery1', address: 'Salt Lake City, UT', date: '05/02' },
                { type: 'Delivery2', address: 'testst, AZ', date: '05/04' },
            ],
            img: 'assets/images/pages/trip/trip1.jpg',
            commodity: {
                piece_count: 1,
                width: '8.inch',
                height: '10.inch',
                length: '360.inch',
                weight: '1700 .lb',
                trailer_type: 'STEP DECK / SINGLE DROP TRAILER',
                loaded_miles: 7,
                empty_miles: 0,
                total_miles: 7
            },
            rate_info:{
                rate: 1900,
                month_rate: 271.43,
                dispatch_name: 'Sam Doyle',
                contact1: '+1 702-635-6357',
                broker_agent: 'Danny L',
                contact2: '+1 615-547-6233',
                reference: '70d4d7d0',
                address1: '704 6th Ave, New York, NY 10010, USA',
                address2: '2810 Country Club Road Cranford, NJ 07016',
                email1: 'abbott@withinpixels.com',
                email2: 'hello@fuseinc.com',
                website: 'www.fuseinc.com',
                subtotal: 84.17,
                tax: 12.17,
                discount: 6.3,
                total: 72.3
            },
            permission: {
            }
        },
        {
            id: 150987,
            orders: [
                { type: 'Pickup', address: 'Pooler, GA', date: '04/29' },
                { type: 'Delivery', address: 'West Valley City, UT', date: '05/02' },
            ],
            img: 'assets/images/pages/trip/trip2.jpg',
            commodity: {
                piece_count: 1,
                width: '102.inch',
                height: '102.inch',
                length: '150.inch',
                weight: '10000 .lb',
                trailer_type: 'STEP DECK / SINGLE DROP TRAILER',
                loaded_miles: 65,
                empty_miles: 0,
                total_miles: 65
            },
            rate_info:{
                rate: 2400,
                month_rate: 36.92,
                dispatch_name: 'Sam Doyle',
                contact1: '+1 702-635-6357',
                broker_agent: 'Todd',
                contact2: '+1 985-641-8233',
                reference: '70d4d7d0',
                address1: '704 6th Ave, New York, NY 10010, USA',
                address2: '2810 Country Club Road Cranford, NJ 07016',
                email1: 'abbott@withinpixels.com',
                email2: 'hello@fuseinc.com',
                website: 'www.fuseinc.com',
                subtotal: 84.17,
                tax: 12.17,
                discount: 6.3,
                total: 72.3
            },
            permission: {
            }
        },
        {
            id: 150989,
            orders: [
                { type: 'Pickup', address: 'Pooler, GA', date: '04/28' },
                { type: 'Delivery', address: 'Eugene, OR', date: '05/03' },
            ],
            img: 'assets/images/pages/trip/trip3.jpg',
            commodity: {
                piece_count: 1,
                width: '102.inch',
                height: '102.inch',
                length: '200.inch',
                weight: '30000 .lb',
                trailer_type: 'STEP DECK / SINGLE DROP TRAILER',
                loaded_miles: 2853,
                empty_miles: 104,
                total_miles: 2957
            },
            rate_info:{
                rate: 7600,
                month_rate: 2.57,
                dispatch_name: 'Sam Doyle',
                contact1: '+1 702-635-6357',
                broker_agent: 'Todd',
                contact2: '+1 985-641-8233',
                reference: '70d4d7d0',
                address1: '704 6th Ave, New York, NY 10010, USA',
                address2: '2810 Country Club Road Cranford, NJ 07016',
                email1: 'abbott@withinpixels.com',
                email2: 'hello@fuseinc.com',
                website: 'www.fuseinc.com',
                subtotal: 84.17,
                tax: 12.17,
                discount: 6.3,
                total: 72.3
            },
            permission:{
                permit: 'Trip Permission'
            }
        }
    ]
};

mock.onGet('/api/trips').reply(config => {
	return [200, tripDb.trips];
});

mock.onGet('/api/trips/:id').reply(request => {
	const { id } = request.params;
	const trip = tripDb.trips.find(_trip => _trip.id === id);
	return [200, trip];
});
