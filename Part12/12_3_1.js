//document 객체를 대상으로 이벤트 리스너 추가, 종류 : "DOMContentLoaded" -> 문서의 콘텐츠 로딩 완료를 의미함
document.addEventListener("DOMContentLoaded",
    //이벤트 핸들러, HTML 코드가 로딩된 후 비동기적으로 작업 수행
    function(e) {
        //input 태그를 찾아 button 변수에 저장
        let button = document.querySelector("input")

        //button 변수에 이벤트 리스너 추가, 종류 : "input"
        button.addEventListener("input", 
            function(e) {
                //콘솔에 입력창의 값 출력
                console.log(e.target.value)
            }
        )        
    }
)

//<p>태그에서 인라인 이벤트 모델로 호출할 함수 hi 정의
function hi() {
    //alert()를 띄워 글자 "hi" 출력
    alert("hi")
}