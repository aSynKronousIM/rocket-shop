var productSeeds = [
    {
        "sku": "illudium-q36",
        "name": "Illudium Q-36 Explosive Space Modulator",
        "image": "illudium -q36.jpg",
        "summary": "Need to destory a planet?",
        "description": "At last, after two thousand years of research, the illudium is here!",
        "price": 4995,
        "vendor": {
            "id": 1,
            "slug": "martian-armaments",
            "name": "Martian Armaments, Ltd"
        }
    },
    {
        "sku": "honeymoon-mars",
        "name": "Honeymoon on Mars",
        "image": "honeymoon-mars.jpg",
        "summary": "Tired of boring wedding pictures?",
        "description": "At last, after two thousand years of research, the illudium is here!",
        "price": 6995,
        "vendor": {
            "id": 2,
            "slug": "red-planet",
            "name": "Red Planet Love Machine"
        }
    },
    {
        "sku": "your-own-crater",
        "name": "Your Very Own Crater",
        "image": "your-own-crater.jpg",
        "summary": "Buy on for yourself or the one you love!",
        "description": "The Martina surface is scarred by huge numbers of craters",
        "price": 99995,
        "vendor": {
            "id": 2,
            "slug": "red-planet",
            "name": "Red Planet Love Machine"
        }
    },
    {
        "sku": "johnny-liftoff",
        "name": "Rocket Boost Pack",
        "image": "johnny-liftoff.jpg",
        "summary": "Why walk when you can fly?",
        "description": "The Martina surface is scarred by huge numbers of craters",
        "price": 123939,
        "vendor": {
            "id": 2,
            "slug": "red-planet",
            "name": "Red Planet Love Machine"
        }
    },
    {
        "sku": "one-way-reentry",
        "name": "One Way Reentry",
        "image": "one-way-reentry.jpg",
        "summary": "Buy on for yourself or the one you love!",
        "description": "The Martina surface is scarred by huge numbers of craters",
        "price": 938295,
        "vendor": {
            "id": 2,
            "slug": "red-planet",
            "name": "Red Planet Love Machine"
        }
    }
];

if (Products.find().count() === 0) {
    _.each(productSeeds, function(product) {
        Products.insert(product);
        console.log("Inserted ", product.sku);
    })
}

