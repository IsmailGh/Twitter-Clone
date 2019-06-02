
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/tweets';

loadingElement.style.display = 'none';

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('form submitted');
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const tweet = {
        name,
        content,
    };
    console.log(tweet);
    form.style.display = 'none';
    loadingElement.style.display = ''; 

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
           'content-type': 'application/json',
           'Accept': 'application/json'
        }
    }).then(response => response.json())
        .then(createdTweet => {
            console.log(createdTweet);
            form.reset();
            form.style.display = '';
            loadingElement.style.display = none; 
    });
});