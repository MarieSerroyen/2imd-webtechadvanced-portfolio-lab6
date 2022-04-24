const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity, // Number: The max delay before we try to reconnect.
        min: 500, // Number: The minimum delay before we try reconnect.
        retries: 10 // Number: How many times we should try to reconnect.
    },
});

document.querySelector(".scoreboardFrom").addEventListener("submit", e =>{
    //console.log("👍");
    e.preventDefault();

    let dropdown = document.querySelector(".dropdown");
    let skater = dropdown.options[dropdown.selectedIndex].value;
    //console.log(skater);
    let score = document.querySelector(".inputScore").value;
    console.log(score);

    primus.write ({
        name: skater,
        score: score,
    });
});

