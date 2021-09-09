export default function formatCurrency(num) {
    return "$" + Number(num).toLocaleString() + " ";
    // return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
  }
  