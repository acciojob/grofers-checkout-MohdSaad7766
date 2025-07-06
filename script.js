const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const priceElements = document.querySelectorAll(".price");

  // Sum up all the prices
  let total = 0;
  priceElements.forEach(priceEl => {
    total += Number(priceEl.textContent.trim());
  });

  // Create new row and cell
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Make cell span two columns and show the total
  newCell.colSpan = 2;
  newCell.textContent = `Total Price: Rs ${total}`;
  newCell.style.fontWeight = "bold";
  newCell.style.textAlign = "right";

  // Append cell to row and row to table
  newRow.appendChild(newCell);
  table.appendChild(newRow);

  // Disable button to prevent duplicate rows
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
