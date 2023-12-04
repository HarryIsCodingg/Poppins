

const vibesData = [
    {
        name: 'Ice Bar Out',
        placeName: 'Riverside',
        type: 'activity',
        rating: 4.9,
        address: {
            street: 'Riverside, St-Henri',
            fullCity: 'Montreal, Quebec, Canada',
        },
        reviews: 499,
        rentalDuration: 2,
        price: 44,
        images: [
            require('../../src/assets/images/vibe/riverside/1.png'),
        ],
        vibes: [
            {
                video: require('../assets/videos/riverside/winter-night.mp4'),
                vibeName: 'Winter',
                vibeIcon: 'noto:snowflake',
                images : [
                    require('../../src/assets/images/vibe/riverside/1.png'),
                    require('../../src/assets/images/vibe/riverside/2.png'),
                    require('../../src/assets/images/vibe/riverside/3.png'),
                ]
            },
            {
                video: require('../assets/videos/riverside/summer.mp4'),
                vibeName: 'Summer',
                vibeIcon: 'emojione-v1:sun',
                images : [
                    require('../../src/assets/images/vibe/riverside/summer/summer-1.jpeg'),
                    require('../../src/assets/images/vibe/riverside/summer/summer-2.jpeg'),
                    require('../../src/assets/images/vibe/riverside/summer/summer-3.jpeg'),
                ]
            }
        ]
    },
    {
        name: 'Vibe_2',
        type: 'activity',
        rating: 4.9,
        reviews: 499,
        rentalDuration: 2,
        price: 44,
        images: [
            require('../../src/assets/images/vibe/V2/v2_1.jpg'),
            require('../../src/assets/images/vibe/V2/v2_1.jpg')
        ],
    },
    {
        name: 'Vibe_3',
        type: 'activity',
        rating: 4.9,
        reviews: 499,
        rentalDuration: 2,
        price: 44,
        images: [
            require('../../src/assets/images/vibe/V2/v2_1.jpg'),
            require('../../src/assets/images/vibe/V2/v2_1.jpg')
        ],
    },
    {
        name: 'Vibe 4',
        type: 'activity',
        rating: 4.9,
        reviews: 499,
        rentalDuration: 2,
        price: 44,
        images: [
            require('../../src/assets/images/vibe/V2/v2_1.jpg'),
            require('../../src/assets/images/vibe/V2/v2_1.jpg')
        ],
    },

];

export default vibesData;
