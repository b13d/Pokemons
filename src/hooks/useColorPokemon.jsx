function getColor(type) {
  let color = "";

  switch (type) {
    case "grass":
      color = "#1f7f1c";
      break;

    case "fire":
      color = "tomato";
      break;

    case "water":
      color = "#3498f5";
      break;

    case "poison":
      color = "#a465bf";
      break;

    case "flying":
      color = "#5F89F5";
      break;

    case "bug":
      color = "orange";
      break;

    case "normal":
      color = "gray";
      break;
    case "fighting":
      color = "#C86F42";
      break;
    case "electric":
      color = "#BFA546";
      break;
    case "ground":
      color = "#947944";
      break;
    case "psychic":
      color = "#bf5b99";
      break;
    case "rock":
      color = "#5c7a7a";
      break;
    case "ice":
      color = "#71ACC2";
      break;
    case "dragon":
      color = "#50A495";
      break;
    case "ghost":
      color = "#9D70B1";
      break;
    case "dark":
      color = "#86538C";
      break;
    case "steel":
      color = "#5B8196";
      break;
    case "fairy":
      color = "#DAB0D4";
      break;

    default:
      color = "#A8D2A2";
      break;
  }

  return color;
}

export default function useColorPokemon(props) {
  if (!props) return;

  const arrColors = [];

  props.map((type) => {
    arrColors.push(getColor(type.type.name));
  });

  return arrColors;
}
