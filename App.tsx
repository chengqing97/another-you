import React, { useState } from "react";

//import stacks
import MainStack from "./src/routes/MainStack";
import AuthStack from "./src/routes/AuthStack";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) return <MainStack />;
  return <AuthStack setIsLoggedIn={setIsLoggedIn} />;
}
