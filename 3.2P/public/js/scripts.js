const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s12 m6 l3 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span>' +
            '<p><a href="' + item.link + '">View full recipe</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p>' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
}

const loadRecipes = () => {
    fetch('/api/recipes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
        })
        .then(data => addCards(data))
        .catch(err => {
            console.error('Failed to load recipes from /api/recipes', err);
            $("#card-section").append('<div class="col s12 center-align"><p>Could not load recipes right now.</p></div>');
        });
}

const submitSuggestion = () => {
    const formData = {
        first_name: $('#first_name').val(),
        recipe_name: $('#recipe_name').val(),
        email: $('#email').val()
    };
    console.log('Recipe suggestion submitted', formData);
    alert("Thanks " + (formData.first_name || "there") + "! Your recipe suggestion was logged to the console.");
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();
    $('#formSubmit').click(() => {
        submitSuggestion();
    });

    loadRecipes();
});