function update_text() {
    var user_text = document.getElementById("user_text");
    var meme_text = document.getElementById("meme_text");

    meme_text.innerHTML = user_text.value;
}

function update_image() {
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];

    img.src = window.URL.createObjectURL(file);
}

function download() {
    html2canvas(document.getElementById('content')).then(function (canvas) {
        // document.body.appendChild(canvas)
        const a = document.createElement('a');
        //toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'generated_meme.jpg';
        a.click();
    });
}
