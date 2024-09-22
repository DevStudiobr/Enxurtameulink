document.getElementById('shortenBtn').addEventListener('click', async () => {
    const longUrl = document.getElementById('longUrl').value;
    const apiKey = 'sua_chave_aqui'; // Substitua pela sua chave de API

    if (!longUrl) {
        alert('Por favor, insira um link!');
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify({ long_url: longUrl })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('result').innerHTML = `URL Encurtada: <a href="${data.short_url}" target="_blank">${data.short_url}</a>`;
        } else {
            document.getElementById('result').innerText = data.error || 'Erro ao encurtar o link.';
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Erro na conexão com a API.';
    }
});