const searchbox = document.getElementById("search");
searchbox.addEventListener('keyup', () => {
    const product = document.querySelectorAll(".icon");
    const pname = document.querySelectorAll(".label");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].querySelectorAll(".label")[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toLocaleUpperCase().indexOf(searchbox.value.toLocaleUpperCase()) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
})