function getColor(type) {
  let color = "";

  switch (type) {
    case "grass":
      color = "#1f7f1c80";
      break;

    case "fire":
      color = "rgba(245,122,78,0.8)";
      break;

    case "water":
      color = "#3498f580";
      break;

    case "poison":
      color = "#a465bf80";
      break;

    case "flying":
      color = "#5F89F580";
      break;

    case "bug":
      color = "#ffedd580";
      break;

    case "normal":
      color = "rgba(65,65,65,0.8)";
      break;
    case "fighting":
      color = "#C86F4280";
      break;
    case "electric":
      color = "#BFA54680";
      break;
    case "ground":
      color = "#94794480";
      break;
    case "psychic":
      color = "#bf5b9980";
      break;
    case "rock":
      color = "#5c7a7a80";
      break;
    case "ice":
      color = "#71ACC280";
      break;
    case "dragon":
      color = "#50A49580";
      break;
    case "ghost":
      color = "#9D70B180";
      break;
    case "dark":
      color = "#86538C80";
      break;
    case "steel":
      color = "#5B819680";
      break;
    case "fairy":
      color = "#DAB0D480";
      break;

    default:
      color = "#A8D2A280";
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
