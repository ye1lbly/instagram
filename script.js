console.log("test")
alert("오늘 기분은 어떠신가요?")

function numbering(n) {
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}

function red() {
    let button = document.querySelector("input")
    button.style.backgroundColor = "red"
}

let button = document.querySelector("input")
button.addEventListener("click", 
    function(event) {
        alert("clicked!")
    }
)

let button2 = document.querySelector("input")
button2.addEventListener("input", 
    function(e) {
        console.log(e.target.value)
    }
)