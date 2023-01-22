let icon = document.querySelectorAll(".icon");

icon.forEach((item) => {
  item.addEventListener('click', () => {
    let text = item.querySelector('.label').innerHTML;
    let code = `<i class="bi bi-${text}"></i>`;
    navigator.clipboard.writeText(code);
    document.getElementById("alert").style.bottom = '10px'
    document.getElementById("txt").innerHTML = text + " copyed"
    let time = 4;
    let interval = setInterval(() => {
      time -= 1;
      if (time === 1) {
        document.getElementById("alert").style.bottom = '-100px'
      }
    }, 500);
    if (time === 1) {
      interval = ""
    }
  });
});