import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from "react-native-svg";

//import componenents
import Send from "./icons/Send";

const AbokIcon = ({ name, size, color }) => {
  if (!name) return null;
  const nameParts = name.split("-");
  let iconName = name;
  let outline = false;
  if (nameParts.includes("outline")) {
    outline = true;
    iconName = nameParts
      .filter((item) => {
        return item !== "outline";
      })
      .join("-");
  }
  if (!size) size = 20;

  if (iconName === "send") return <Send outline={outline} color={color} size={size} />;

  return (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <Defs>
        <LinearGradient id="Gradient" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#E5982E" stopOpacity="1" />
          <Stop offset="1" stopColor="#D13472" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path
        d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"
        fill="none"
        stroke="url(#Gradient)"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="40"
      />
      <Circle fill="url(#Gradient)" cx="248" cy="399.99" r="32" />
    </Svg>
  );
};

export default AbokIcon;
