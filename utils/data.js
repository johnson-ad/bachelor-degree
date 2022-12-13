import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'Free Shirt 007 king',
      slug: 'free-shirt',
      catgory: 'Shirts',
      image: '/images/pants1.jpg',
      // images: [
      //   '/images/pants1.jpg',
      //   '/images/johnson&johnson.png',
      //   '/images/pants3.jpg',
      //   '/images/look.png',
      // ],
      price: '70',
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description:
        "A popular shirt from Nike. It is a great shirt for the summer Le commerce est l'une des plus anciennes et plus importantes inventions de l'humanité. Dans un contexte de mondialisation caractérisé par l'accélération des échanges commerciaux et financiers à l'échelle mondiale grâce au développement des technologies de l'information et de la communication, le e-commerce occupe une place croissante sur le marché de la vente..",
    },

    {
      name: 'Paris Shirt',
      slug: 'paris-shirt',
      catgory: 'Shirts',
      image: '/images/johnson&johnson.png',
      price: '70',
      brand: 'Jason',
      rating: 4.4,
      numReviews: 8,
      countInStock: 7,
      description: 'A popular shirt from Jason.',
    },

    {
      name: 'Airdax Shoes',
      slug: 'airdax-shoes',
      catgory: 'Shoes',
      image: '/images/pants3.jpg',
      price: '230',
      brand: 'Nike',
      rating: 4.8,
      numReviews: 8,
      countInStock: 35,
      description: 'A popular shoes from Nike.',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      catgory: 'Pants',
      image: '/images/look5.png',
      price: '70',
      brand: 'Johnson&Johnson',
      rating: 4.5,
      numReviews: 8,
      countInStock: 290,
      description:
        "A popular shirt from Nike. It is a great shirt for the summer Le commerce est l'une des plus anciennes et plus importantes inventions de l'humanité. Dans un contexte de mondialisation caractérisé par l'accélération des échanges commerciaux et financiers à l'échelle mondiale grâce au développement des technologies de l'information et de la communication, le e-commerce occupe une place croissante sur le marché de la vente..",
    },

    {
      name: 'Hummer Shirt',
      slug: 'hummer-shirt',
      catgory: 'Shirts',
      image: '/images/look.png',
      price: '30',
      brand: 'Hummer',
      rating: 4.5,
      numReviews: 8,
      countInStock: 23,
      description:
        'A popular shirt from Hummer. It is a great shirt for the summer.',
    },

    {
      name: 'Zara Pants',
      slug: 'zara-pants',
      catgory: 'Pants',
      image: '/images/pants2.jpg',
      price: '95',
      brand: 'Zara',
      rating: 4.6,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular pants from Zara.',
    },

    {
      name: 'Jeans Pants',
      slug: 'jeans-pants',
      catgory: 'Pants',
      image: '/images/shirt3.jpg',
      price: '46',
      brand: 'Olivier',
      rating: 4,
      numReviews: 9,
      countInStock: 45,
      description: 'A popular pants from Jeans.',
    },
    {
      name: 'H&M Shirt',
      slug: 'H&M-shirt',
      catgory: 'Shirts',
      image: '/images/look1.png',
      price: '90',
      brand: 'H&M',
      rating: 4.5,
      numReviews: 8,
      countInStock: 52,
      description: 'A popular shirt from H&M.',
    },

    {
      name: 'Air Maxs',
      slug: 'air-maxsss',
      catgory: 'Shoes',
      image: '/images/nft6-removebg-preview.png',
      price: '170',
      brand: 'Nike',
      rating: 4.0,
      numReviews: 7,
      countInStock: 49,
      description: 'A popular shoes from Nike.',
    },

    {
      name: 'Golf Pantss',
      slug: 'golf-pantssss',
      catgory: 'Pants',
      image: '/images/nft5-removebg-preview.png',
      price: '70',
      brand: 'Johnson&Johnson',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        'A popular shirt from Nike. It is a great shirt for the summer.',
    },

    {
      name: 'Addidas Shirt',
      slug: 'addidas-shirt',
      catgory: 'Shoes',
      image: '/images/shirt1.jpg',
      price: '65',
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 9,
      countInStock: 35,
      description: 'A popular shirt from Addidas.',
    },
    // {
    //   name: 'Addidas Shirtss',
    //   slug: 'addidas-shirtsss',
    //   catgory: 'Shoes',
    //   image: '/images/nft3-removebg-preview.png',
    //   price: '85',
    //   brand: 'Addidas',
    //   rating: 4.5,
    //   numReviews: 9,
    //   countInStock: 30,
    //   description: 'A popular shirt from Addidas.',
    // },
  ],
};

export default data;
