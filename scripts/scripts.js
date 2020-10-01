function tabuada() {
    let number = document.getElementById("txtn")
    let tab = document.getElementById("txtsel")

    if (number.value.length == 0) {
        alert("Digite um número!")
    } else {
        let n = Number(number.value)
        let c = 1
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}