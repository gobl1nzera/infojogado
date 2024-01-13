function searchPlayer() {
    const jogador = document.getElementById('playerInput').value;

    if (!jogador) {
        console.log('Please enter a player name.');
        return;
    }

    const url = 'https://sportscore1.p.rapidapi.com/players/search?name=' + jogador;
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'ac4a0b9821msh3e8627d96d7f0b2p12f1f0jsn30848489f307',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            const responseData = result.data;

            if (responseData && responseData.length > 0) {
                const firstPlayer = responseData[0];

                document.getElementById('name').innerHTML = `<h2>${firstPlayer.name}</h2>`;
                document.getElementById('photo').innerHTML = `<img src="${firstPlayer.photo}" alt="Player Photo">`;
                document.getElementById('age').innerHTML = `<p><strong>Age: ${firstPlayer.age}</strong></p>`;
                const flagUpperCase = firstPlayer.flag.toUpperCase();
                document.getElementById('flag').innerHTML = `<p><strong>${flagUpperCase}</strong></p>`;
                
                document.getElementById('position').innerHTML = `<p><strong>Position: ${firstPlayer.position_name}</strong></p>`;
                document.getElementById('shirtNumber').innerHTML = `<p><strong>Shirt Number: ${firstPlayer.shirt_number}</strong></p>`;
                document.getElementById('preferredFoot').innerHTML = `<p><strong>Preferred Foot: ${firstPlayer.preferred_foot}</strong></p>`;
                
            } else {
                console.log('Data not found in the response.');
            }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

