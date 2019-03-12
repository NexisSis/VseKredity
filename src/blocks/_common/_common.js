function updateValByName(val,inputName) {
    $("input[name=" + inputName + "Val]").val(val.replace(/.{3}$/, ' $&'));
}

$(".accordeon__item").on("click", function () {
    this.classList.toggle("accordeon__item_active");
});
