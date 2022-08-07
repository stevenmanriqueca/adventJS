const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  return ovejas.reduce((acc, elm) => {
    const splittedName = elm.name.toLowerCase().split("");
    if (
      elm.color === "rojo" &&
      splittedName.includes("n") &&
      splittedName.includes("a")
    ) {
      acc.push(elm);
    }
    return acc;
  }, []);
}

contarOvejas(ovejas);
