var question = []
var answer = []
var used = []
var usedanswer = []
var position = 0;
var positionanswer = 0;
var delta = 0;
let n = 0;
let loi=0;
let questionclass = document.getElementsByClassName("question");
let answerclass = document.getElementsByClassName("answer")
let hienchu=document.getElementsByClassName("hienchu")
document.getElementById("start").addEventListener("mouseover", function (){
    document.getElementById("start").style.backgroundColor="#F0F8FF"
})
document.getElementById("start").addEventListener("mouseout",function(){
    document.getElementById("start").style.backgroundColor="#FFFAF0"
})
document.getElementById("start").addEventListener("click", function () {
    document.getElementById("hiendiem").style.display="block"
    document.getElementById("hienloisai").style.display="block"
    document.getElementById("ngancach").style.display = "block"
    document.getElementById("hienthiketqua").style.display = "none"
    document.getElementById("containerquestion").style.display = "grid"
    document.getElementById("containeranswer").style.display = "grid"
    document.getElementById("time").style.display = "block"
    document.getElementById("start").style.display = "none"
    for (let i = 0; i < 16; i++) {
        answerclass[i].style.display = "block"
        questionclass[i].style.display = "block"
    }
    for (let i = 0; i < dictionary.length; i++) {
        used[i] = false;
    }
    for (let i = 0; i < 16; i++) {
        usedanswer[i] = false;
    }
    while (position < 16) {
        a = Math.floor(Math.random() * dictionary.length)
        if (used[a] == false) {
            question[position] = dictionary[a].tu;
            answer[position] = dictionary[a].nghia;
            used[a] = true;
            position = position + 1
        }
    }
    for (let i = 0; i < 16; i++) {
        hienchu[i].textContent = question[i];
    }
    while (positionanswer < 16) {
        a = Math.floor(Math.random() * 16);
        if (usedanswer[a] == false) {
            answerclass[positionanswer].textContent = answer[a];
            usedanswer[a] = true;
            positionanswer++;
        }
    }
    for (let i = 0; i < 16; i++) {
        questionclass[i].addEventListener("mouseover", function () {
            questionclass[i].style.backgroundColor = "red"
        })
        questionclass[i].addEventListener("mouseout", function () {
            questionclass[i].style.backgroundColor = "white"
        })
        answerclass[i].addEventListener("mouseover", function () {
            answerclass[i].style.backgroundColor = "blue"
        })
        answerclass[i].addEventListener("mouseout", function () {
            answerclass[i].style.backgroundColor = "white"
        })
    }
    let m = setInterval(function () {
        document.getElementById("time").style.width = `${900 - 1.5* delta}px`
        delta++;
        if (delta == 600) {
            clearInterval(m);
        }
    }, 100)
    for (let i = 0; i < 16; i++) {
        questionclass[i].addEventListener("click", function BAOBEO2() {
            if (checkanswer() == 100) {
                if (questionclass[i].style.borderColor == "blue") {
                    questionclass[i].style.borderColor = "black"
                }
                else {
                    if (checkquestion() != 100) {
                        questionclass[checkquestion()].style.borderColor = "black"
                    }
                    questionclass[i].style.borderColor = "blue"
                }
                for (let j = 0; j < 16; j++) {
                    answerclass[j].addEventListener("click", function BAOBEO() {
                        if (questionclass[i].style.borderColor == "blue") {
                            if (sosanhdapan(answerclass[j].textContent, hienchu[i].textContent) == true) {
                                answerclass[j].style.display = "none";
                                questionclass[i].style.borderColor = "black"
                                answerclass[j].style.borderColor = "black"
                                questionclass[i].style.display = "none";
                                answerclass[j].removeEventListener("click", BAOBEO)
                                n++;
                                if(n==16){
                                    document.getElementById("containerquestion").style.display = "none"
                                    document.getElementById("containeranswer").style.display = "none"
                                    document.getElementById("time").style.display = "none"
                            
                                    document.getElementById("hienthiketqua").style.display = "block"
                                    document.getElementById("ngancach").style.display = "none"
                                    document.getElementById("time").style.width = "900px"
                                    for (let i = 0; i < 16; i++) {
                                        answerclass[i].style.borderColor = "black"
                                        questionclass[i].style.borderColor = "black"
                                    }
                                document.getElementById("hienthiketqua").innerHTML = `BẠN ĐƯỢC ĐIỂM TỐI ĐA BẠN LÀ MỘT THIÊN TÀI TRONG LĨNH VỰC NÀY.  BẠN HÃY QUAY LẠI MỤC ĐỀ THAM KHẢO ĐỂ CHỌN ĐỀ ĐÚNG VỚI KHẢ NĂNG CỦA MÌNH.`
                                document.getElementById("hiendiem").style.display="none"
                                document.getElementById("hienloisai").style.display="none"
       
                                
                                }
                                document.getElementById("hiendiem").innerHTML=`${n}`
                                document.getElementById("hiendiem").style.borderColor="green"
                                setTimeout(function(){
                                    document.getElementById("hiendiem").style.borderColor="black"
                                },100)
                                if(loi==0){
                                
                                document.getElementById("hienloisai").innerHTML="0"
                                }
                                document.getElementById("hiendiem").style.fontSize="40px"
                                document.getElementById("hienloisai").style.fontSize="40px"
                            }
                            else {
                                questionclass[i].style.borderColor = "black"
                                answerclass[j].style.borderColor = "black"
                                document.getElementById("hiendiem").style.fontSize="40px"
                                document.getElementById("hienloisai").style.fontSize="40px"
                                answerclass[j].removeEventListener("click", BAOBEO)
                                loi++;
                                if(n==0){
                                    document.getElementById("hiendiem").innerHTML="0"
                                   
                                }
                                document.getElementById("hienloisai").innerHTML=`${loi}`
                                document.getElementById("hienloisai").style.borderColor="red"
                                setTimeout(function(){
                                    document.getElementById("hienloisai").style.borderColor="black"
                                },100)
                            }
                        }
                    })
                }
            }
        })
        answerclass[i].addEventListener("click", function BAOBEO4() {
            if (checkquestion() == 100) {
                if (answerclass[i].style.borderColor == "red") {
                    answerclass[i].style.borderColor = "black"
                }
                else {
                    if (checkanswer() != 100) {
                        answerclass[checkanswer()].style.borderColor = "black"
                    }
                    answerclass[i].style.borderColor = "red"
                }
                for (let j = 0; j < 16; j++) {

                    questionclass[j].addEventListener("click", function BAOBEO3() {
                        console.log(sosanhdapan(answerclass[i].textContent, hienchu[j].textContent))
                        if (answerclass[i].style.borderColor == "red") {
                            if (sosanhdapan(answerclass[i].textContent, hienchu[j].textContent) == true) {
                                answerclass[i].style.display = "none";
                                questionclass[j].style.display = "none";
                                questionclass[j].style.borderColor = "black"
                                document.getElementById("hiendiem").style.fontSize="40px"
                                document.getElementById("hienloisai").style.fontSize="40px"
                                answerclass[i].style.borderColor = "black"
                                questionclass[j].removeEventListener("click", BAOBEO3)
                                n++;
                                if(n==16){
                                    document.getElementById("containerquestion").style.display = "none"
                                    document.getElementById("containeranswer").style.display = "none"
                                    document.getElementById("time").style.display = "none"
                            
                                    document.getElementById("hienthiketqua").style.display = "block"
                                    document.getElementById("ngancach").style.display = "none"
                                    document.getElementById("time").style.width = "900px"
                                    for (let i = 0; i < 16; i++) {
                                        answerclass[i].style.borderColor = "black"
                                        questionclass[i].style.borderColor = "black"                                
                                    }
                                document.getElementById("hienthiketqua").innerHTML = `BẠN ĐƯỢC ĐIỂM TỐI ĐA BẠN LÀ MỘT THIÊN TÀI TRONG LĨNH VỰC NÀY.  BẠN HÃY QUAY LẠI MỤC ĐỀ THAM KHẢO ĐỂ CHỌN ĐỀ ĐÚNG VỚI KHẢ NĂNG CỦA MÌNH.`
                                document.getElementById("hiendiem").style.display="none"
                                document.getElementById("hienloisai").style.display="none"
                                  
                                }
                                if(loi==0){
                                   
                                    document.getElementById("hienloisai").innerHTML="0"
                                    }
                                document.getElementById("hiendiem").innerHTML=`${n}`
                                document.getElementById("hiendiem").style.borderColor="green"
                                setTimeout(function(){
                                    document.getElementById("hiendiem").style.borderColor="black"
                                },100)

                            }
                            else {
                                questionclass[j].style.borderColor = "black"
                                document.getElementById("hiendiem").style.fontSize="40px"
                                document.getElementById("hienloisai").style.fontSize="40px"
                                answerclass[i].style.borderColor = "black"
                                questionclass[j].removeEventListener("click", BAOBEO3)
                                if(n==0){
                                    document.getElementById("hiendiem").innerHTML="0"
                                    
                                }
                                loi++
                                
                                document.getElementById("hienloisai").innerHTML=`${loi}`
                                document.getElementById("hienloisai").style.borderColor="red"
                                setTimeout(function(){
                                    document.getElementById("hienloisai").style.borderColor="black"
                                },100)

                            }
                        }
                    })


                }
            }

        })
    }


    function checkquestion() {
        let a = 100;
        for (let i = 0; i < 16; i++) {
            if (questionclass[i].style.borderColor == "blue") {
                a = i;
            }
        }
        return a
    }

    function checkanswer() {
        let a = 100;
        for (let i = 0; i < 16; i++) {
            if (answerclass[i].style.borderColor == "red") {
                a = i;
            }
        }
        return a
    }

    function positionofquestion(b) {
        let a = 0;
        for (let i = 0; i < question.length; i++) {
            if (b == question[i]) {
                a = i
            }

        }
        return a;
    }

    function positionofanswer(b) {
        let a = 0;
        for (let i = 0; i < answer.length; i++) {
            if (b == answer[i]) {
                a = i
            }

        }
        return a;
    }



    function sosanhdapan(a, b) {
        if (positionofanswer(a) == positionofquestion(b)) {
            return true
        }
        return false
    }
    

 
    setTimeout(function () {
        document.getElementById("containerquestion").style.display = "none"
        document.getElementById("containeranswer").style.display = "none"
        document.getElementById("time").style.display = "none"

        document.getElementById("hienthiketqua").style.display = "block"
        document.getElementById("ngancach").style.display = "none"
        document.getElementById("time").style.width = "900px"
        for (let i = 0; i < 16; i++) {
            answerclass[i].style.borderColor = "black"
            questionclass[i].style.borderColor = "black"
        }
        if (n < 6) {
            document.getElementById("hienthiketqua").innerHTML = `BẠN ĐƯỢC ${n} ĐIỂM NGHĨA LÀ BẠN ĐANG THUỘC MỨC YẾU. BẠN HÃY QUAY LẠI MỤC ĐỀ THAM KHẢO ĐỂ CHỌN ĐỀ ĐÚNG VỚI KHẢ NĂNG CỦA MÌNH.`
        }
        if (n >= 6 && n < 12) {
            document.getElementById("hienthiketqua").innerHTML = `BẠN ĐƯỢC ${n} ĐIỂM NGHĨA LÀ BẠN ĐANG THUỘC MỨC TRUNG BÌNH.  BẠN HÃY QUAY LẠI MỤC ĐỀ THAM KHẢO ĐỂ CHỌN ĐỀ ĐÚNG VỚI KHẢ NĂNG CỦA MÌNH.`
        }
        if (n > 12) {
            document.getElementById("hienthiketqua").innerHTML = `BẠN ĐƯỢC ${n} ĐIỂM NGHĨA LÀ BẠN ĐANG THUỘC MỨC GIỎI. BẠN HÃY QUAY LẠI MỤC ĐỀ THAM KHẢO ĐỂ CHỌN ĐỀ ĐÚNG VỚI KHẢ NĂNG CỦA MÌNH.`
        }
        document.getElementById("hiendiem").style.display="none"
        document.getElementById("hienloisai").style.display="none"
       


    }, 60000)


})

