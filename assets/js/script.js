const Btns = document.querySelectorAll(".butonlar");
const ekran = document.querySelector(".ekran");
const equal = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");
const point = document.querySelector(".point");
const reset = document.querySelector(".reset");
const myRange = document.querySelector("#myRange");

let display = "0";
let dizi = [];
let deger = "0";

function init(){
    myRange.oninput = function(){
        let rangeValue = parseInt(this.value);
        if(rangeValue == 33){
            document.body.style.background = "#3A4663";
            document.querySelector(".calc").style.color = "#FFF";
            document.querySelector(".themeText").style.color = "#FFF";
            document.querySelector(".slider").style.background = "#242D44";
            document.querySelector(".changeNumber").style.color = "#FFF";
            document.querySelector(".ekran").style.background = "#181F33";
            document.querySelector(".ekran").style.color = "#FFF";
            document.querySelector(".butonlar").style.background = "#242D44";
            document.querySelector(".delete").style.background = "#647198";
            document.querySelector(".reset").style.background = "#647198";
        }
        if(rangeValue == 66){
            document.body.style.background = "#E6E6E6";
            document.querySelector(".calc").style.color = "#36362C";
            document.querySelector(".themeText").style.color = "#36362C";
            document.querySelector(".slider").style.background = "#D2CDCD";
            document.querySelector(".changeNumber").style.color = "#36362C";
            document.querySelector(".ekran").style.background = "#EEE";
            document.querySelector(".ekran").style.color = "#36362C";
            document.querySelector(".butonlar").style.background = "#D2CDCD";
            document.querySelector(".delete").style.background = "#378187";
            document.querySelector(".reset").style.background = "#378187";
        }
        if(rangeValue == 99){
            document.body.style.background = "#17062A";
            document.querySelector(".calc").style.color = "#FFE53D";
            document.querySelector(".themeText").style.color = "#FFE53D";
            document.querySelector(".slider").style.background = "#1E0936";
            document.querySelector(".changeNumber").style.color = "#FFE53D";
            document.querySelector(".ekran").style.background = "#1E0936";
            document.querySelector(".ekran").style.color = "#FFE53D";
            document.querySelector(".butonlar").style.background = "#1E0936";
            document.querySelector(".delete").style.background = "#56077C";
            document.querySelector(".reset").style.background = "#56077C";
            const numaralar = document.querySelectorAll(".number");
            for (const numara of numaralar) {
                numara.style.background = "#331C4D";
                numara.style.color = "#FFE53D";
            }
            document.querySelector(".equal").style.background = "#00DED0";
            // document.querySelectorAll(".btn").style.background = "#331C4D";
        }
    }
}

function takeNumbers(){
    for (const Btn of Btns) {
        Btn.addEventListener("click", e => {
            // console.log(e.target.value);
            deger = e.target.value;
            // console.log(typeof deger);
            ekran.value += deger;
            display = ekran.value;
        })
    }
}

function hesapla(){
    equal.addEventListener("click", function(){
        ekran.value = eval(display);
    })   
}

function bindDeleteBtn(){
    deleteBtn.addEventListener("click", function(){
        ekran.value = display.slice(0,-1);
    })

}

function bindPointBtn(){
    point.addEventListener("click", function(){
        ekran.value += ".";
    })
}

function bindResetBtn(){
    reset.addEventListener("click", function(){
        ekran.value = " ";
    })
}



init();
takeNumbers();
hesapla();
bindDeleteBtn();
bindPointBtn();
bindResetBtn();