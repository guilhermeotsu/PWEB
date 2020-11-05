document.addEventListener("DOMContentLoaded", function() {
    const $checks = Array.from(document.querySelectorAll("input#Pesquisa"))
    const $inputs = Array.from(document.querySelectorAll("input"))
    $inputs.push(document.querySelector("textarea"))

    $checks.forEach((item, i) => {
        item.addEventListener("change", () => {
            if(i) {
                $checks[i - 1].checked = false
                return
            }

            $checks[i + 1].checked = false
        })
    })

    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault()
    
        if(this[0].selectionEnd < 10) {
            alert("Nome não pode ser menor que 10")
        }
        
        if(this[2].selectionEnd < 20) {
            alert("Comentário não pode ser menor que 20")
        }
    })

    document.querySelector("#limpar").addEventListener("click", () => {
        $inputs.forEach(item => item.value = "")
    })
})