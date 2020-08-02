document.querySelector("select").onchange = function() {
    let game = document.querySelector("#game");

    if (this.value === "lone-sentry"){
        game.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/2082832?color=161616" width="980" height="640"><a href="https://itsnotsimon.itch.io/lone-sentry">Play Lone Sentry on itch.io</a></iframe>';
    } else if (this.value === "darkest-night"){
        game.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/2020967?color=161616" allowfullscreen="" width="965" height="620"><a href="https://itsnotsimon.itch.io/darkest-night">Play The Darkest Night on itch.io</a></iframe>';
    } else if (this.value === "rift"){
        game.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/1982902?color=161616" allowfullscreen="" width="980" height="680"><a href="https://itsnotsimon.itch.io/rift">Play ~ Rift ~ on itch.io</a></iframe>';
    } else if (this.value === "ex-umbris"){
        game.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/2482538?color=161616" width="1042" height="610"><a href="https://itsnotsimon.itch.io/ex-umbris">Play Ex Umbris on itch.io</a></iframe>';
    } else if (this.value === "beyond-eden"){
        game.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/1742335?color=161616" allowfullscreen="" width="1600" height="860"><a href="https://itsnotsimon.itch.io/beyond-eden">Play Beyond Eden on itch.io</a></iframe>';
    } else if (this.value === "the-cave"){
        game.innerHTML = '<iframe frameborder="0" src="https://itch.io/embed-upload/1038065?color=161616" allowfullscreen="" width="980" height="680"><a href="https://itsnotsimon.itch.io/the-cave">Play The Cave on itch.io</a></iframe>';
    }
}