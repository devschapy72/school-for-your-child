const FormatePrice = ({ price }) => {
  return Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default FormatePrice;
