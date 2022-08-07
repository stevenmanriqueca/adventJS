const carta = "bici coche balón  _playstation bici coche peluche";

function listGifts(carta) {
	const splittedWords = carta.split(" ");
	return splittedWords
		.filter((elm) => !elm.includes("_") && elm !== "")
		.reduce((acc, elm) => {
			acc[elm] ? acc[elm]++ : (acc[elm] = 1);
			return acc;
		}, {});
}

listGifts(carta);
