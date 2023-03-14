const device_data = [
  {
    id: 1001,
    name: "Lenovo F3",
    type: "Laptop",
    screen_size: "14 inch",
  },
  {
    id: 2001,
    name: "Asus TUF",
    type: "Laptop",
    screen_size: "17 inch",
  },
  {
    id: 3001,
    name: "Axioo 14",
    type: "Laptop",
    screen_size: "13 inch",
  },
  {
    id: 4001,
    name: "Toshiba Satelite",
    type: "Laptop",
    screen_size: "17 inch",
  },
  {
    id: 5001,
    name: "Zyrex",
    type: "Laptop",
    screen_size: "12 inch",
  },
  {
    id: 5001,
    name: "Zyrex",
    type: "Laptop",
    screen_size: "12 inch",
  },
];

const device_price = [
  {
    device_id: 4001,
    price: "$400",
  },
  {
    device_id: 5001,
    price: "$500",
  },
  {
    device_id: 3001,
    price: "$300",
  },
  {
    device_id: 2001,
    price: "$200",
  },
  {
    device_id: 1001,
    price: "$100",
  },
];

device_data.map((data) => {
  device_price
    .filter((filter) => filter.device_id === data.id)
    .map((price) => {
      console.log(data.name, data.type, price.price);
    });
});
