
function displayFunction(){
    var inputValue = document.getElementById("myInput").value;
    var li = document.createElement('li');
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert("Write Something so show");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = '';

}
