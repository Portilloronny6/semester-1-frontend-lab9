document.querySelector("button").addEventListener("click", () => {
  const objs = document.querySelectorAll("input[type=checkbox]:checked");
  inputText = document.querySelector("textarea");
  if (!objs.length) {
    inputText.value = "";
    return Swal.fire({
      icon: "error",
      title: "Oй!",
      text: "Вы должны выбрать хотя бы один вариант!",
      footer: '<a href="https://github.com/Portilloronny6" target="_blank">Вопросы: Github -> @portilloronny6</a>',
    });
  }

  inputText.value = "";
  total = 0;
  console.log(inputText);
  objs.forEach((item, index) => {
    inputText.value += `${index + 1}) ${item.name}: ${item.value} p.\n`;
    total += parseInt(parseInt(item.value));
  });
  if (objs.length === 5) {
    inputText.value += `\n- Всего к оплате: ${total * 0.9} p. (-10%)`;
  } else {
    inputText.value += `\n- Всего к оплате: ${total} p.`;
  }
});
