document.addEventListener("DOMContentLoaded",
    function(e) {
        let profile_pic = document.querySelector("#profile_pic .circle_pic")

        profile_pic.addEventListener("mouseover",
            function(e) {
                e.target.style.filter = "grayscale(90%)" //90% 흑백화
            }
        )
        profile_pic.addEventListener("mouseleave",
            function(e) {
                e.target.style.filter = "grayscale(0%)"
            }
        )

        profile_pic.addEventListener("click",
            function(e) {
                profile_pic.setAttribute("src", prompt("새로운 이미지 url을 입력해주세요 !"))
            }
        )

        let configId = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configId.addEventListener("click",
            function(e) {
                idText.textContent = prompt("새로운 아이디를 입력하세요") //prompt() : 팝업창을 띄워 정보 입력받는 도구
            }
        )

        let profileEditButton = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#profileDetail")
        let changing = false //프로필 수정 진행 여부 체크 

        profileEditButton.addEventListener("click",
            function(e) {
                if (changing) {
                    //현재 <input> 태그에 입력된 값을 뽑아내 변수에 저장
                    let _userInfo = userInfo.querySelector("input").value
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary

                    if (_profileDetail.startsWith("http")) {
                        _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false
                } else {
                    let _userInfo = userInfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent

                    //innerHTML로 userInfo id를 가진 태그 사이에 HTML 코드 할당 또는 기재된 값 가져올 수 있음
                    userInfo.innerHTML = "<input value=" + _userInfo + "></input>" 
                    summary.innerHTML = "<input value=" + _summary + "></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true //프로필 편집 중임 !
                }
            }
        )
    }
)