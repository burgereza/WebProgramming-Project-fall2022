function switcher() {
    const city1 = document.getElementById('city1');
    const city2 = document.getElementById('city2');
    var option1 = city1.value;
    var option2 = city2.value;
    city1.value = option2;
    city2.value = option1;
    disable(2, false);
    disable(1, false);
    render(0);
}

function disableDropdown() {
    var selectobject;
    selectobject = document.getElementById("dropdownBranch").getElementsByTagName("option");
    selectobject[3].disabled = true;
    $('#dropdownBranch').selectpicker('render');
    selectobject = document.getElementById("pureDropDown").getElementsByTagName("option");
    for (z = 0; z < selectobject.length; z++) {
        selectobject[z].disabled = true;
    }
}

function disable(cityNumber, f) {
    const city1 = document.getElementById('city1');
    const city2 = document.getElementById('city2');
    if (cityNumber == 1) {
        const option2 = city2.value;
        for (z = 0; z < city1.length; z++) {
            city1[z].disabled = false;
        }
        city1[option2].disabled = true;
        if (f == true) {
            render(1);
        }
    }
    if (cityNumber == 2) {
        const option1 = city1.value;
        for (z = 0; z < city2.length; z++) {
            city2[z].disabled = false;
        }
        city2[option1].disabled = true;
        if (f == true) {
            render(2);
        }
    }
}

function render(cityNumber) {
    if (cityNumber == 0) {
        $('#city1').selectpicker('render');
        $('#city2').selectpicker('render');
    }
    if (cityNumber == 1) {
        $('#city1').selectpicker('render');
    }
    if (cityNumber == 2) {
        $('#city2').selectpicker('render');
    }
}
function handler(){
    window.alert("Error")



}
 let x = document.querySelector("#submit");
 console.log(x);
//.addEventListener("click",handler);//