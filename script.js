document.addEventListener("input", () => {
  // Введення даних
  const seedQty = parseFloat(document.getElementById("seedQty").value) || 0;
  const seedPrice = parseFloat(document.getElementById("seedPrice").value) || 0;

  const fertilizerQty = parseFloat(document.getElementById("fertilizerQty").value) || 0;
  const fertilizerPrice = parseFloat(document.getElementById("fertilizerPrice").value) || 0;

  const waterQty = parseFloat(document.getElementById("waterQty").value) || 0;
  const waterPrice = parseFloat(document.getElementById("waterPrice").value) || 0;

  const plantedSeeds = parseFloat(document.getElementById("plantedSeeds").value) || 0;
  const sellPrice = parseFloat(document.getElementById("sellPrice").value) || 0;

  // Розрахунки
  const seedTotal = seedQty * seedPrice;
  const fertilizerTotal = fertilizerQty * fertilizerPrice;
  const waterTotal = waterQty * waterPrice;

  const totalExpenses = seedTotal + fertilizerTotal + waterTotal;

  const berryCount = plantedSeeds * 2.5; // 1 насіння = 2.5 ягод
  const cleanBerryCount = berryCount * 0.9; // 90% від грязних

  const grossIncome = berryCount * sellPrice;
  const netIncome = cleanBerryCount * sellPrice - totalExpenses;

  // Виведення результатів
  document.getElementById("seedTotal").textContent = `${seedTotal.toFixed(2)} грн`;
  document.getElementById("fertilizerTotal").textContent = `${fertilizerTotal.toFixed(2)} грн`;
  document.getElementById("waterTotal").textContent = `${waterTotal.toFixed(2)} грн`;
  document.getElementById("totalExpenses").textContent = `${totalExpenses.toFixed(2)} грн`;

  document.getElementById("berryCount").textContent = `${berryCount.toFixed(2)} ягід (грязними)`;
  document.getElementById("cleanBerryCount").textContent = `${cleanBerryCount.toFixed(2)}`;

  document.getElementById("grossIncome").textContent = `${grossIncome.toFixed(2)} грн`;
  document.getElementById("netIncome").textContent = `${netIncome.toFixed(2)} грн`;
});
