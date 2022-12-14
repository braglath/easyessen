module.exports = {
  data: [
    {
      id: 1,
      cuisineId: 1,
      image:
        "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
      name: "Chicken Wings Barbecue",
      foodType: "North Indian, Chinese",
      rating: 3.5,
      totalRatings: 55,
      price: 100,
      isVeg: false,
      isFavorite: false,
      deliveryTime: 25,
      menu: 4,
      offers: [
        {
          percentage: 25,
          couponeCode: "EASY25",
        },
      ],
    },
    {
      id: 2,
      cuisineId: 5,
      image:
        "https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000",
      name: "Cheese Burger with Finger Chips",
      foodType: "Fast Food, USA",
      rating: 4.5,
      totalRatings: 65,
      price: 80,
      isVeg: false,
      isFavorite: true,
      deliveryTime: 10,
      menu: 1,
      offers: [
        {
          percentage: 15,
          couponeCode: "EASY15",
        },
      ],
    },
    {
      id: 3,
      cuisineId: 3,
      image:
        "https://www.thespruceeats.com/thmb/yLyKgqIj6-SLt9gJkgkjfIZtfC0=/4300x2867/filters:no_upscale():max_bytes(150000):strip_icc()/chole-chickpea-curry-1957946-hero-01-cddf957cc78d4032ba29ec2adbc05a97.jpg",
      name: "Fried Roti with Paneer Butter Masala",
      foodType: "North Indian, Continental",
      rating: 4.8,
      totalRatings: 85,
      price: 120,
      isVeg: true,
      isFavorite: true,
      deliveryTime: 35,
      menu: 2,
      offers: [
        {
          percentage: 55,
          couponeCode: "EASY55",
        },
      ],
    },
    {
      id: 4,
      cuisineId: 1,
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
      name: "Spicy Chicken Curry",
      foodType: "South Indian",
      rating: 4.2,
      totalRatings: 15,
      price: 120,
      isVeg: false,
      isFavorite: false,
      deliveryTime: 25,
      menu: 4,
      offers: [],
    },
    {
      id: 5,
      cuisineId: 3,
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_30/2943911/190723-easy-chow-mein-al-1414.jpg",
      name: "Chinese Noodles",
      foodType: "Chinese Special",
      rating: 3.5,
      totalRatings: 105,
      price: 80,
      isVeg: true,
      isFavorite: false,
      deliveryTime: 15,
      menu: 3,
      offers: [
        {
          percentage: 25,
          couponeCode: "EASY25",
        },
      ],
    },
    {
      id: 6,
      cuisineId: 6,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/A_traditional_indian_dish_of_bengal%28pulao-mangsha_with_misti_doi%29.jpg",
      name: "South Indian Mini Meal",
      foodType: "South Indian, Tradition",
      rating: 4.1,
      totalRatings: 180,
      price: 60,
      isVeg: true,
      isFavorite: true,
      deliveryTime: 5,
      menu: 1,
      offers: [],
    },
    {
      id: 7,
      cuisineId: 2,
      image:
        "https://media.self.com/photos/57d8954324fe9dae32831913/master/pass/15-Classic-Dishes_Feature.png",
      name: "Juicy Pasta",
      foodType: "Fast Food, USA",
      rating: 3.8,
      totalRatings: 25,
      price: 160,
      isVeg: true,
      isFavorite: false,
      deliveryTime: 15,
      menu: 2,
      offers: [
        {
          percentage: 25,
          couponeCode: "EASY25",
        },
      ],
    },
    {
      id: 8,
      cuisineId: 7,
      image: "https://i.ytimg.com/vi/ecLL7_voJRc/maxresdefault.jpg",
      name: "Crispy Samosa",
      foodType: "North Indian, Tradition",
      rating: 3.8,
      totalRatings: 255,
      price: 45,
      isVeg: true,
      isFavorite: true,
      deliveryTime: 5,
      menu: 3,
      offers: [],
    },
    {
      id: 9,
      cuisineId: 8,
      image:
        "https://a.cdn-hotels.com/gdcs/production196/d970/cd40235b-5990-4067-8c05-c7d04711a312.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      name: "Juicy Chicken Leg",
      foodType: "North Indian",
      rating: 1.8,
      totalRatings: 243,
      price: 160,
      isVeg: false,
      isFavorite: true,
      deliveryTime: 45,
      menu: 1,
      offers: [
        {
          percentage: 8,
          couponeCode: "EASY8",
        },
      ],
    },
    {
      id: 10,
      cuisineId: 7,
      image:
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/Khandvi.jpg",
      name: "Gujarati Veg Roll",
      foodType: "North Indian, Traditional",
      rating: 4.1,
      totalRatings: 185,
      price: 145,
      isVeg: true,
      isFavorite: false,
      deliveryTime: 15,
      menu: 4,
      offers: [],
    },
    {
      id: 11,
      cuisineId: 6,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/potluck-dishes-vegetarian-chili-macaroni-1574870284.jpg?crop=0.913xw:0.609xh;0,0.187xh&resize=640:*",
      name: "Hot Spicy Pasta",
      foodType: "Chinese",
      rating: 2.8,
      totalRatings: 95,
      price: 250,
      isVeg: true,
      isFavorite: false,
      deliveryTime: 25,
      menu: 2,
      offers: [
        {
          percentage: 25,
          couponeCode: "EASY25",
        },
      ],
    },
    {
      id: 12,
      cuisineId: 8,
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F05%2F17%2Fgarlic-butter-prime-rib-FT-RECIPE0621.jpg&q=60",
      name: "Soft Beef Curry",
      foodType: "Street Food, USA",
      rating: 3.5,
      totalRatings: 55,
      price: 100,
      isVeg: false,
      isFavorite: true,
      deliveryTime: 55,
      menu: 1,
      offers: [
        {
          percentage: 15,
          couponeCode: "EASY25",
        },
      ],
    },
    {
      id: 13,
      cuisineId: 2,
      image:
        "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/11/1024px-chicken_65_dish.jpg",
      name: "Prawn Pakoda",
      foodType: "South Indian Special",
      rating: 3.8,
      totalRatings: 255,
      price: 145,
      isVeg: false,
      isFavorite: true,
      deliveryTime: 30,
      menu: 4,
      offers: [
        {
          percentage: 15,
          couponeCode: "EASY25",
        },
      ],
    },
    {
      id: 14,
      cuisineId: 3,
      image:
        "https://st2.depositphotos.com/3935465/7268/i/600/depositphotos_72687501-stock-photo-chickpeas-falafel-with-tzatziki-sauce.jpg",
      name: "Egyptian Egg Balls",
      foodType: "Fried Special",
      rating: 3.5,
      totalRatings: 55,
      price: 100,
      isVeg: false,
      isFavorite: false,
      deliveryTime: 25,
      menu: 3,
      offers: [],
    },
    {
      id: 15,
      cuisineId: 4,
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2021/01/view-of-the-kati-roll-companys-dish-kosha-mangsho-861455066.jpg?fit=700,700",
      name: "Veg Frankie",
      foodType: "North Indian, Sides",
      rating: 3.5,
      totalRatings: 75,
      price: 50,
      isVeg: true,
      isFavorite: false,
      deliveryTime: 10,
      menu: 3,
      offers: [
        {
          percentage: 5,
          couponeCode: "EASY5",
        },
      ],
    },
  ],
};
