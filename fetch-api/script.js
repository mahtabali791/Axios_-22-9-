function fetchUser() {
    document.getElementById('fetch-result').innerText = 'Loading...';
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const html = `<strong>Name:</strong> ${user.name.first} ${user.name.last}<br>
                          <strong>Email:</strong> ${user.email}<br>
                          <img src="${user.picture.medium}" alt="User Picture">`;
            document.getElementById('fetch-result').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('fetch-result').innerText = 'Error: ' + error;
        });
}
