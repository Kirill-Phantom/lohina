document.getElementById("calculate").addEventListener("click", () => {
    // Получение данных из формы
    const seeds = Number(document.getElementById("seeds").value) || 0;
    const seedPrice = Number(document.getElementById("seed-price").value) || 0;
    const fertilizer = Number(document.getElementById("fertilizer").value) || 0;
    const fertilizerPrice = Number(document.getElementById("fertilizer-price").value) || 0;
    const water = Number(document.getElementById("water").value) || 0;
    const waterPrice = Number(document.getElementById("water-price").value) || 0;
    const sellPrice = Number(document.getElementById("sell-price").value) || 0;

    // Расчёт затрат
    const totalCost = seeds * seedPrice + fertilizer * fertilizerPrice + water * waterPrice;

    // Количество ягод
    const berries = seeds * 2.5; // 20 семян = 50 ягод

    // Доходы
    const grossIncome = berries * sellPrice;
    const netIncome = grossIncome - totalCost;

    // Анимация появления результатов
    const resultsDiv = document.getElementById("results");
    resultsDiv.classList.remove("fade-in");
    void resultsDiv.offsetWidth; // Трюк для перезапуска анимации
    resultsDiv.classList.add("fade-in");

    // Отображение результатов
    document.getElementById("cost").querySelector("span").textContent = totalCost.toFixed(2);
    document.getElementById("berries").querySelector("span").textContent = berries.toFixed(0);
    document.getElementById("gross-income").querySelector("span").textContent = grossIncome.toFixed(2);
    document.getElementById("net-income").querySelector("span").textContent = netIncome.toFixed(2);
});
