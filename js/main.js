let show = document.querySelector(".showresult")
let showhelp = document.querySelector(".showhelp")
let clearone = document.querySelector(".c")
let clearall = document.querySelector(".ac")
let hasel = document.querySelector(".hasel")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zarb = document.querySelector(".zarb")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let manfi = document.querySelector(".manfi")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let plus = document.querySelector(".plus")
let manfiplus = document.querySelector(".manfiplus")
let zeroo = document.querySelector(".zeroo")
let dot = document.querySelector(".dot")
let result = document.querySelector(".result")
let allNumber = document.querySelectorAll("#btn-num")

//allnumber

allNumber.forEach((item)=> {
    item.addEventListener("click", (e)=> {
        if (show.textContent === "0.0") {
            show.textContent = e.target.textContent
        }else {
            show.textContent += e.target.textContent
        }
    })
})

//clearall

clearall.addEventListener("click" ,(e)=> {
    show.textContent = "0.0"
    setpoint = false
    setresult = false
    num1 = 0
    num2 = 0
})

//clear

clearone.addEventListener("click" ,(e)=> {
    let len = show.textContent.length
    let lastdigit = show.textContent.substring(len - 1 , len)
    if (lastdigit === ".") {
        setpoint = false
    }
    
    if (len > 1) {
        show.textContent = show.textContent.substring(0,len-1)
    }else {
        show.textContent = "0.0"
    }
})

//manfiplus

manfiplus.addEventListener("click", (e)=> {
    show.textContent*=-1
})

//dot

let setpoint = false;
dot.addEventListener("click", (e)=> {
    if (setpoint == false) {
        show.textContent += "."
        setpoint = true;
    }
})

//plus

let num1,num2,summary;
let op = "";
// let setplus = false;
plus.addEventListener("click",(e)=> {
    // let pluslen = show.textContent.length
    // let lastplus = show.textContent.substring(pluslen-1 , pluslen)
    // if (lastplus !== "+") {
    //     show.textContent+="+"
    //     setplus = true
    // }
    num1 = Number(show.textContent)
    show.textContent = "0.0"
    op = "+"
    setpoint = false
})

//manfi

manfi.addEventListener("click",(e)=> {
    // let pluslen = show.textContent.length
    // let lastplus = show.textContent.substring(pluslen-1 , pluslen)
    // if (lastplus !== "+") {
    //     show.textContent+="+"
    //     setplus = true
    // }
    num1 = Number(show.textContent)
    show.textContent = "0.0"
    op = "-"
    setpoint = false
})

// 

hasel.addEventListener("click",(e)=> {
    // let pluslen = show.textContent.length
    // let lastplus = show.textContent.substring(pluslen-1 , pluslen)
    // if (lastplus !== "+") {
    //     show.textContent+="+"
    //     setplus = true
    // }
    num1 = Number(show.textContent)
    show.textContent = "0.0"
    op = "/"
    setpoint = false
})

//zarb

zarb.addEventListener("click",(e)=> {
    // let pluslen = show.textContent.length
    // let lastplus = show.textContent.substring(pluslen-1 , pluslen)
    // if (lastplus !== "+") {
    //     show.textContent+="+"
    //     setplus = true
    // }
    num1 = Number(show.textContent)
    show.textContent = "0.0"
    op = "*"
    setpoint = false
})

//result

let setresult = false
result.addEventListener("click", (e)=> {
    if (setresult==false) {
        num2 = Number(show.textContent)
    }else {
        num1 = Number(show.textContent)
    }    
    switch (op) {
        case "+":
            summary=num1+num2
            showhelp.textContent = `${num1} + ${num2}`
            break;
        case "-":
            summary=num1-num2
            showhelp.textContent = `${num1} - ${num2}`
            break;
        case "/":
            summary=num1/num2
            showhelp.textContent = `${num1} / ${num2}`
            break;
        case "*":
            summary=num1*num2
            showhelp.textContent = `${num1} * ${num2}`
            break;
    }
    show.textContent=summary
    setresult = true
})


console.log("alireza")