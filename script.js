function refreshDashboard() {
  const revenue = Math.floor(Math.random() * 15000) + 35000;
  const pairsSold = Math.floor(Math.random() * 500) + 1000;
  const inventory = Math.floor(Math.random() * 700) + 3500;
  const rating = Math.floor(Math.random() * 5) + 91;

  document.getElementById("revenue").innerText = "$" + revenue.toLocaleString();
  document.getElementById("pairsSold").innerText = pairsSold.toLocaleString();
  document.getElementById("inventory").innerText = inventory.toLocaleString();
  document.getElementById("rating").innerText = rating + "%";
}

function generateSummary() {
  document.getElementById("summary").innerText =
    "Summary: CornerStone Footwear is performing well this month. Revenue and sales are strong, but inventory management needs attention. The main business priority is restocking low-supply products while continuing to promote the best-selling running shoe category.";
}