let test = "372736210";

const split = () => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    .format(test)
    .slice(0, -3);
};
console.log(split(test));
