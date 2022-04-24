const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity, // Number: The max delay before we try to reconnect.
        min: 500, // Number: The minimum delay before we try reconnect.
        retries: 10 // Number: How many times we should try to reconnect.
    },
});

primus.on("data", data => {
    console.log("We hebben data jongens!");
    console.log(data);

    let skater = "." + data.name;
    let score = data.score;

    document.querySelector(skater).innerHTML = score;

    console.log(score);
});