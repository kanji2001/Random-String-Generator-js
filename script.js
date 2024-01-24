function cal() {
    const first = document.getElementById('String').value;
    const second = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < first; i++) {
        const random = Math.floor(Math.random() * second.length);
        randomString += second.charAt(random);
    }

    document.getElementById('Result').innerText = `Random String: ${randomString}`;
}