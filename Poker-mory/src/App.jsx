import { useState,useEffect } from "react";
import Background from './Background'
import Loading from "./Loading";
import Menu from "./Menu";
import Game from "./Game";
const App = () => {
  const [isLoading,setLoading] = useState(false);
  const [isMenu,setMenu] = useState(true);
return (
  <>
    <Background>
      <Menu/> 
    </Background>
</>
)
}
export default App;