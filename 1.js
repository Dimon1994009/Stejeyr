// Отправка AJAX-запроса методом GET
$.get("myPage.php", function(data) {
    alert("Данные получены: " + data);
});

// Отправка запроса методом fetch
fetch("myPage.php")
    .then(response => response.text())
    .then(data => alert("Данные получены: " + data));
