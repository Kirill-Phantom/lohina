document.getElementById("calculate").addEventListener("click", function () {
    const seeds = Number(document.getElementById("seeds").value) || 0;
    const seedPrice = Number(document.getElementById("seed-price").value) || 0;
    const fertilizer = Number(document.getElementById("fertilizer").value) || 0;
    const fertilizerPrice = Number(document.getElementById("fertilizer-price").value) || 0;
    const water = Number(document.getElementById("water").value) || 0;
    const waterPrice = Number(document.getElementById("water-price").value) || 0;
    const sellPrice = Number(document.getElementById("sell-price").value) || 0;

    // Витрати
    const totalCost = seeds * seedPrice + fertilizer * fertilizerPrice + water * waterPrice;

    // Виробництво
    const berries = seeds * 2.5; // 20 насінин = 50 ягід

    // Доходи
    const grossIncome = berries * sellPrice;
    const netIncome = grossIncome - totalCost;

    // Виведення результатів
    document.getElementById("cost").textContent = `Загальні витрати: ${totalCost.toFixed(2)} грн`;
    document.getElementById("berries").textContent = `Кількість ягід: ${berries.toFixed(0)} шт`;
    document.getElementById("gross-income").textContent = `Доходи брутто: ${grossIncome.toFixed(2)} грн`;
    document.getElementById("net-income").textContent = `Доходи нетто: ${netIncome.toFixed(2)} грн`;
});
