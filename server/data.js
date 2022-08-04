    import bcrypt from "bcryptjs";
    const data = {
    users: [
    {
        name: 'Peters Oizamsi',
        email: 'petersoizamsi@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
    },
    {
        name: 'Omeiza Paul',
        email: 'omeizapaul@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
    }
    ],
    products : [
    {
        name: "danish image",
        image: "/images/wed5.jpg",
        description: "With a feel of life and love",
        price: 25000,
        countInStock: 8,
        rating: 3.5,
        numReview: 4
    },
    {
        name: "Gavison jury",
        image: "/images/wed7.jpg",
        description: "An amazing feeling to have",
        price: 28000,
        countInStock: 7,
        rating: 4.5,
        numReview: 8
    },
    {
        name: "Ezequel Zoza",
        image: "/images/wed10.jpg",
        description: "emanance of serenity",
        price: 35000,
        countInStock: 10,
        rating: 5,
        numReview: 10
    },
    {
        name: "Vincente Amoradon",
        image: "/images/wed11.jpg",
        description: "Gracias de avociente",
        price: 30000,
        numReview: 7
    },
    {
        name: "Louis Simpson",
        image: "/images/wed13.jpg",
        description: "With all dignity",
        price: 33000,
        countInStock: 0,
        rating: 4.5,
        numReview: 3
    },
    {
        name: "souza love",
        image: "/images/wed1.jpg",
        description: "Wow what a life to a part a part of",
        price: 27500,
        countInStock: 8,
        rating: 5,
        numReview: 9
    },
    {
        name: "Vanessa candrova",
        image: "/images/wed2.jpg",
        description: "Monalisa amomie",
        price: 37000,
        countInStock: 10,
        rating: 5,
        numReview: 8
    }
]
}

export default data;