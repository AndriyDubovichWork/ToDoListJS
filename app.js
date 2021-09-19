const brdrclor = document.getElementById("brdrclor");
brdrclor.addEventListener(
    "input",
    function () {
        const brdrclors = brdrclor.value;

        
        document.getElementById("inp").style.border = `2px solid ${brdrclors}`;
        document.getElementById("btn_1").style.border = `2px solid ${brdrclors}`;
        document.getElementById("btn_2").style.border = `2px solid ${brdrclors}`;
        document.getElementById("del").style.border = `2px solid ${brdrclors}`;
    },
    false
);

const txtcolor = document.getElementById("txtclor");
txtcolor.addEventListener(
    "input",
    function () {
        const txtcolors = txtcolor.value;
        document.getElementById("btn_1").style.backgroundColor = `${txtcolors}`;
        document.getElementById("btn_2").style.backgroundColor = `${txtcolors}`;
        document.getElementById("del").style.backgroundColor = `${txtcolors}`;
        document.getElementById("inp").style.backgroundColor = `${txtcolors}`;
        document.getElementById("bady").style.color = `${txtcolors}`;
 
    },
    false
);

const bgcolor = document.getElementById("bgclor");
bgcolor.addEventListener(
    "input",
    function () {
        const bgcolors = bgcolor.value;
        document.getElementById("btn_1").style.color = `${bgcolors}`;
        document.getElementById("btn_2").style.color = `${bgcolors}`;
        document.getElementById("inp").style.color = `${bgcolors}`;

        document.getElementById("bady").style.backgroundColor = `${bgcolors}`;
    },
    false
);

function DeleteAll() {
    const element = document.getElementById("inject");
    element.innerHTML = "";
}

function Delete() {
    try {
        for (let i = 0; i < 300; i++) {
            try {
                let chbnumlbl = 0;
                let brrnum = 0;
                for (let chbnum = 4; chbnum <= 300; chbnum++) {
                    const checkbox = document.getElementsByTagName("input")[chbnum];
                    const checkBoxLbl = document.getElementsByTagName("label")[chbnumlbl];
                    const brr = document.getElementsByTagName("br")[brrnum];

                    if (checkbox.checked === true) {
                        checkbox.remove();
                        checkBoxLbl.remove();
                        brr.remove();
                    }
                    ++chbnumlbl;
                    ++brrnum;
                }
            } catch (error) {}
        }
    } catch (error) {}
}
function checking() {
    try {
        let chbnumlbl = 0;
        for (let chbnum = 4; chbnum <= 300; chbnum++) {
            const checkbox = document.getElementsByTagName("input")[chbnum];
            const checkBoxLbl =
                document.getElementsByTagName("label")[chbnumlbl];

            if (checkbox.checked === true) {
                checkBoxLbl.style = "text-decoration: line-through;";
            } else {
                checkBoxLbl.style = "text-decoration: none;";
            }
            ++chbnumlbl;
        }
    } catch (error) {}
}

function addToList() {
    
    const inpValue = document.getElementById("inp").value;
    checking()
    if (inpValue !== "") {
        const element = document.getElementById("inject");
        const html = `<input type = 'checkbox' id = "checkBox" name = 'checkBox'onclick = "checking()" style = 'margin:0;zoom: 1.6;'></input><label for = 'checkBox' id = 'LblForCheckBox' style = 'margin:0'>${inpValue}</label><br>`;
        element.innerHTML += html;
        document.getElementById("inp").value = "";

        // save cookies =fuck this featur spend 3 days
        
    }
}

