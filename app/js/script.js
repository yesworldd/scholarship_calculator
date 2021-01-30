(function () {
    const form = document.querySelector("form");

    const averageRating = document.querySelector("#average_rating");
    const rk1 = document.querySelector("#rk1");
    const rk2 = document.querySelector("#rk2");
    const type = document.querySelector("#select");

    const infoTitle = document.querySelector(".info__title");
    const infoRd = document.querySelector(".rd__text");
    const infoSession = document.querySelector(".session__text");

    // Events
    form.addEventListener("submit", onFormSubmit);

    function onFormSubmit(e) {
        e.preventDefault();

        const valueAverageRating = averageRating.value;
        const valueRk1 = rk1.value;
        const valueRk2 = rk2.value;
        const valueType = type.value;

        if (!validation(valueAverageRating, valueRk1, valueRk2)) {
            alert("Ошибка! Введите правильные данные");
            return;
        }
        const rd = calculatePoints(valueAverageRating, valueRk1, valueRk2);
        containerTemplate(rd, valueType);
        form.reset();
    }
    function validation(...value) {
        for (let i = 0; i < value.length; i++) {
            const number = value[i];
            if (!(Number(number) + 1)) return false;
            if (number === "") {
                return false;
            }
            if (Number(number) < 0 || Number(number) > 100) return false;
        }
        return true;
    }
    function calculatePoints(valueAverageRating, valueRk1, valueRk2) {
        return (+valueAverageRating * 0.8 + ((+valueRk1 + +valueRk2) / 2) * 0.2).toFixed(2);
    }
    function containerTemplate(rd, valueType) {
        infoRd.textContent = `РД: ${rd} баллов`;
        switch (valueType) {
            case "1":
                infoSession.textContent = `До степендии надо ${
                    ((70 - rd * 0.6) / 0.4).toFixed(2)
                } баллов`;
                break;
            case "2":
                infoSession.textContent = `До повышки надо ${
                    ((90 - rd * 0.6) / 0.4).toFixed(2)
                } баллов`;
                break;
        }
    }
})();
