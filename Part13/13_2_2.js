document.addEventListener("DOMContentLoaded",
    function(e) {
        let input = document.querySelector("input")
        input.addEventListener("click",
            function(e) {
                if (e.target.getAttribute("type") === "button") {
                    e.target.setAttribute("type", "text") //속성 조작시 set 사용
                }
            }
        )

        input.addEventListener("change",
            function(e) {
                e.target.setAttribute("type", "button")
            }
        )
    }
)