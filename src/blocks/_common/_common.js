function updateValByName(val,inputName) {
    $("input[name=" + inputName + "]").val(val);
}

$(".accordeon__item").on("click", function () {
    this.classList.toggle("accordeon__item_active");
});
