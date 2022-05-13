const menuButton = document.querySelector("#menu-btn");

menuButton.addEventListener('click', function() {
    console.log("menu logged");

    if(menuButton.classList.contains('open')){
        menuButton.classList.remove('open');
    }

    else {
        menuButton.classList.add('open');
    }
})