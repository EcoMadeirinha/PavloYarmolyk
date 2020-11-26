document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementsByClassName("aux-label-text")[0].innerHTML = "Ещё";

    document.getElementsByClassName("aux-loading-label")[0].innerHTML = "Загружается";

    var array = document.getElementsByClassName("aux-read-more");

    for (let index = 0; index < array.length; index++) {

        document.getElementsByClassName("aux-read-more")[index].innerHTML = "Читать далее...";
    }

});