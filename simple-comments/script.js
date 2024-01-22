fetch('./count.json')
    .then(response => response.json())
    .then(data => showInfo(data));

function showInfo(data) {
    document.getElementById('likes').innerHTML += data.count;
}
