var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
function getFile(filePath) {
    return filePath.substr(filePath.lastIndexOf('\\') + 1).split('_')[0];
}

function getname(filePath) {
    return filePath.substr(filePath.lastIndexOf('_') + 1).split('.')[0];
}

function getoutput() {
    outputfile.value = getFile(upload.value);
    tach.value = getname(upload.value);
    extension.value = upload.value.split('.')[1];
}