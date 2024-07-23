import React, { useEffect, useState, useMemo, useRef } from "react";
import PokemonIcon from "./PokemonIcon";

export default function SpawnIcons() {
  const [arr, setArr] = useState([]);
  const [iconID, setIconID] = useState(0);

  const interval = useRef(null);

  const handleCheck = (id) => {
    setArr((arr) => arr.filter((elemid) => elemid !== id));
  };

  useEffect(() => {
    if (interval.current !== null) return;

    interval.current = setInterval(() => {
      if (document.hasFocus()) {
        setIconID((iconID) => {
          setArr((arr) => [...arr, iconID]);
          return iconID + 1;
        });
      }
    }, 1000);
  }, []);

  return (
    arr.length > 0 &&
    arr.map((icon) => {
      return <PokemonIcon key={icon} id={icon} handleCheck={handleCheck} />;
    })
  );
}
