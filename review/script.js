document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    var data = new FormData(this);
    fetch('insert.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        if (data === 'error') {
            alert('Error');
        } else {
            alert('Review added');
            location.reload();
        }
    });
});