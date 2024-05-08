let result = $(".result");
let history = $(".history");

function display(write){
    result.text(result.text() + write);
}

function delAll() {
    result.text("");
    history.text("");
}

function del(){
    result.text(result.text().slice(0, -1));
}

function calculate() {
    history.text(result.text());
    result.text(eval(result.text()));
    result.css({ color: "#ff7675" });
}