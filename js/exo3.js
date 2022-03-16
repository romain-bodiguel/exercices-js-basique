function init() {
    
    // Des que la page est chargée, on pose un écouteur sur le formulaire
    const formElement = document.querySelector('#shop-item-form');
    // On écoute l'événement "submit" sur le formulaire. C'est un événement qui est émis quand on clique sur le bouton de validation du formulaire ou qu'on appuie sur entrée.
    formElement.addEventListener('submit', handleFormSubmit);
}

//je crée ma fonction qui va vérifier que l'entrée commence par un #
function handleFormSubmit(event) {

    // Avec la fonction preventDefault, on bloque le comportement par défaut de l'événement (ici charger la page de l'attribut action du formulaire).
    event.preventDefault();
    
    // je récupère d'abord l'élément et la saisie de l'utilisateur dans le bloc concerné
    const inputElement = document.querySelector('#shop-item-input');
    // on récupère la valeur contenue dedans avec ".value"
    const inputValue = inputElement.value;

    // je crée un nouvel élément <li>
    const newLiElement = document.createElement('li');

    // je le remplis avec la saisie de l'utilisateur
    newLiElement.textContent = inputValue;

    // je sélectionne le <ol>
    const olSelect = document.querySelector('#shop-items');

    // j'insère le <li> avec son texte dans le <ul> sélectionné
    olSelect.append(newLiElement);

    // je supprime la valeur de l'input
    inputElement.value = "";
}

// On pose un écouteur sur la page pour lancer notre code seulement quand elle est totalement chargée.
document.addEventListener('DOMContentLoaded', init);