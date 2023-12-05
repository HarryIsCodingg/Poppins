

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
        ],
        confirmation_image: require('../../src/assets/images/vibe/riverside/confirmation_riverside.png'),
    },
    {
        name: 'Corporate Party',
        placeName: 'Soft Construct',
        type: 'activity',
        rating: 4.7,
        address: {
            street: 'Mont Royal',
            fullCity: 'Montreal, Quebec, Canada',
        },
        reviews: 690,
        rentalDuration: 4,
        price: 45,
        images: [
            require('../../src/assets/images/vibe/corporate/corp.png'),
        ],
        vibes: [
            {
                video: require('../assets/videos/soft/SoftConstruct.mp4'),
                vibeName: 'Winter',
                vibeIcon: 'noto:snowflake',
                images : [
                    require('../../src/assets/images/vibe/corporate/corp.png'),
                    require('../../src/assets/images/vibe/corporate/winter1.jpg'),
                    require('../../src/assets/images/vibe/corporate/jakob-dalbjorn-cuKJre3nyYc-unsplash.jpg'),
                ]
            },
            {
                video: require('../assets/videos/riverside/summer.mp4'),
                vibeName: 'Summer',
                vibeIcon: 'emojione-v1:sun',
                images : [
                    require('../../src/assets/images/vibe/corporate/marcel-strauss-kDjYrYf9gAQ-unsplash.jpg'),
                    require('../../src/assets/images/vibe/corporate/al-elmes-ULHxWq8reao-unsplash.jpg'),
                    require('../../src/assets/images/vibe/corporate/major-tom-agency-MJqMxzsxLtM-unsplash.jpg'),
                ]
            }
        ],
        confirmation_image: require('../../src/assets/images/vibe/corporate/confirmation.jpg'),
    },
    {
        name: 'Wedding',
        placeName: 'Roma',
        type: 'activity',
        rating: 4.7,
        address: {
            street: 'Rue de Chamilly',
            fullCity: 'Saint-Léonard, Quebec, Canada',
        },
        reviews: 505,
        rentalDuration: 5,
        price: 45,
        images: [
            require('../../src/assets/images/vibe/roma/marriage1.jpg'),
        ],
        vibes: [
            {
                video: require('../assets/videos/roma/marriage.mp4'),
                vibeName: 'Marriage',
                vibeIcon: 'noto:bride-with-veil',
                images : [
                    require('../../src/assets/images/vibe/roma/marriage1.jpg'),
                    require('../../src/assets/images/vibe/roma/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg'),
                    require('../../src/assets/images/vibe/roma/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg'),
                ]
            },
            {
                video: require('../assets/videos/riverside/summer.mp4'),
                vibeName: 'Birthday',
                vibeIcon: 'emojione-v1:birthday-cake',
                images : [
                    require('../../src/assets/images/vibe/roma/birthday/kyle-head-WE-N1KDqEno-unsplash.jpg'),
                    require('../../src/assets/images/vibe/roma/birthday/andrea-mininni-VLlkOJdzLG0-unsplash.jpg'),
                    require('../../src/assets/images/vibe/roma/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg'),
                ]
            }
        ],
        confirmation_image: require('../../src/assets/images/vibe/roma/confirmation.jpg'),
    },

];

export default vibesData;
