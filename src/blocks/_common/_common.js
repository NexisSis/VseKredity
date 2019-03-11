function updateValByName(val,inputName) {
    $("input[name=" + inputName +  "Val]").val(val.replace(/.{3}$/,' $&'));
}
