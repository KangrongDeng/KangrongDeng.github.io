fetch('https://codeforces.com/api/user.rating?handle=Heyya_x')
.then(response => response.json())
.then(data => {
    const newRating = data.result[data.result.length - 1].newRating;
    
    const rating = document.getElementById('rating');
    
	let color;

    if (newRating >= 2400) {
        color = 'red';
    } else if (newRating >= 2200) {
        color = '#ff8c00';
	} else if (newRating >= 1900) {
		color = '#a0a';
    } else if (newRating >= 1600) {
        color = 'blue';
    } else if (newRating >= 1400) {
        color = '#03a89e';
    } else if (newRating >= 1200) {
        color = 'green';
    } else if (newRawting >= 0) {
        color = 'gray';
    }

	const root = document.querySelector(':root');
	root.style.setProperty('--rating-color', color);
})
.catch(error => {
    console.error('Error fetching Codeforces API:', error);
    document.getElementById('rankDisplay').textContent = 'Error fetching data';
});
