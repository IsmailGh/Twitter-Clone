
const form = document.querySelector('form');

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
});