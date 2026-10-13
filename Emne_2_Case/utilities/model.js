const model = {
  app: {
    currentPage: "adminStorage",
    loggedInUserId: null,
  },
  viewState: {
    menuPage: {
      filter: null,
    },
    productPage: {
      extraID: [],
      removed: [],
      amount: null,
    },
    cakeDesignPage: {
      size: null,
      category: null,
      bakeBun: null,
      extraFilling: [],
      creamType: null,
      creamFlavor: null,
      text: null,
      comment: null,
    },
    orderPage: {
      dateTime: {
        date: null,
        time: null,
      },
      customer: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
      },
      paymentMethod: null,
    },
    adminStorage: {
      search: null,
      filter: {
        categoryID: null,
        content: null,
      },
      newCategory: null,
      newAllergy: null,
      addItem: {
        title: null,
        amount: null,
        price: null,
        image: null,
        category: null,
        alergies: [],
        content: [],
      },
    },
    cart: [{ productID: null, extraID: [], removed: [], amount: null }],
  },

  categories: [
    { name: "baguett", id: 1 },
    { name: "snitter", id: 2 },
    { name: "kakestykker", id: 3 },
    { name: "drikke", id: 4 },
    { name: "kaffe", id: 5 },
  ],
  allergies: [
    { name: "nøtter", id: 1 },
    { name: "laktose", id: 2 },
    { name: "gluten", id: 3 },
  ],
  extra: [
    { name: "pålegg", price: 20, id: 1 },
    { name: "salat", price: 5, id: 3 },
    { name: "tomat", price: 5, id: 4 },
    { name: "agurk", price: 5, id: 5 },
    { name: "majo", price: 5, id: 6 },
    { name: "bacon", price: 20, id: 7 },
  ],
  cakeDesign: {
    size: [
      { name: "20cm", id: 1 },
      { name: "30cm", id: 2 },
      { name: "40cm", id: 3 },
    ],
    category: [
      { name: "bryllup", id: 1 },
      { name: "barnebursdag", id: 2 },
      { name: "babyshower", id: 3 },
    ],
    cakeBun: [
      { name: "sjokolade", id: 1 },
      { name: "vanilje", id: 2 },
      { name: "red velvet", id: 3 },
    ],
    exstraFilling: [
      { name: "bringebær", id: 1 },
      { name: "jordbær", id: 2 },
      { name: "aprikos", id: 3 },
      { name: "ananas", id: 4 },
      { name: "sjokoladebiter", id: 5 },
      { name: "appelsin", id: 6 },
    ],
    creamType: [
      { name: "smørkrem", id: 1 },
      { name: "laktosefri krem", id: 2 },
      { name: "pisket kremfløte", id: 3 },
    ],
    creamFlavor: [
      { name: "vanilje", id: 1 },
      { name: "sjokolade", id: 2 },
      { name: "pistasj", id: 3 },
    ],
  },
  productsData: [
    {
      id: 1,
      category: 1,
      title: "Baguett med ost og skinke",
      price: 100,
      amount: 10,
      image:
        "https://www.gunnarruud.no/wp-content/uploads/2018/03/baguette-ost-og-skinke.jpg",
      allergies: [1, 2, 3],
      content: ["ost", "skinke", "smør", "salat"],
      updated: "12.10.2026",
    },
  ],
  orders: [
    {
      id: 1,
      orderCode: "NK425",
      dateTime: {
        date: "13.10.2026",
        time: "09.30",
      },
      customer: {
        firstName: "Kari",
        lastName: "Nordmann",
        phoneNumber: 1284865455,
      },
      paymentMethod: "Betale i butikk",
      products: [
        { productID: 1, extraID: [1], removed: ["skinke"], amount: 1 },
        { productID: 1, extraID: [1], removed: ["skinke"], amount: 1 },
      ],
      totalPrice: 240,
    },
  ],
};
