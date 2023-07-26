const LURES = [
    {
        id:1,
        title: "Street figther 6",
        category: "Accion",
        price: 1390,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1685745024-street-fighter-vi-ps5-0.jpg",
        stock: 7,
    },
    {
        id:2,
        title: "Need for Speed Unbound",
        category: "Carrera",
        price: 1390,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1665081030-need-for-speed-unbound-ps5-pre-orden-0.jpg",
        stock: 5, 
    },
    {
        id:3,
        title: "F1 2023",
        category: "Carrera",
        price: 990,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1686935952-f1-23-ps5-0.jpg",
        stock: 7, 
    },
    {
        id:4,
        title: "Dead Island 2",
        category: "Accion",
        price: 2450,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1674082148-dead-island-2-ps5-pre-orden-0.jpg",
        stock: 2, 
    },
    {
        id:5,
        title: "The elder scrolls Online",
        category: "Aventura",
        price: 1650,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1646697532-the-elder-scrolls-online-ps5.jpg",
        stock: 5, 
    },
    {
        id:6,
        title: "Littlebigplanet 3",
        category: "Aventura",
        price: 950,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1620507747-littlebigplanet-3-ps4.jpg",
        stock: 5, 
    },
    {
        id:7,
        title: "Battlefield Hardline Edición Estandar",
        category: "Accion",
        price: 450,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1646697354-battlefield-hardline-edicion-estandar-ps5.jpg",
        stock: 1, 
    },
    {
        id:8,
        title: "The Outer Worlds",
        category: "Aventura",
        price: 1390,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1646696797-the-outer-worlds-ps5.jpg",
        stock: 4, 
    },
    {
        id:9,
        title: "Farming Simulator 22 Premium Edition",
        category: "Simulador",
        price: 1390,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1689901185-farming-simulator-22-premium-edition-ps5-pre-orden-0.jpg",
        stock: 3, 
    },
    {
        id:10,
        title: "Bus Simulator 2021",
        category: "Simulador",
        price: 1450,
        description:
            "Juego digital PS5",
        img:"https://storegamesuruguay.com/files/images/productos/1652554142-bus-simulator-21-ps5-0.jpg",
        stock: 3, 
    }
];

export const getLures = (id) => {
    const _lures = id
      ? LURES.filter((lure) => lure.category.toLowerCase() === id)
      : LURES;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_lures);
      }, 500);
    });
  };
  
  export const getLure = (id) => {
    const lure = LURES.filter((lure) => lure.id === id)[0];
  
    return new Promise((res) => {
      setTimeout(() => {
        res(lure);
      }, 1500);
    });
  };