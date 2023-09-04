import videoBackground from "./pokemon-in-the-wild.mp4";
import song1 from "./Song1.mp3";
const Background = ({children}) =>{
    let audioPlaying = false;
      const audioPlay = () =>{
        if(audioPlaying == false){
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioElement = new Audio(song1);
            const audioSource = audioContext.createMediaElementSource(audioElement);
            audioSource.connect(audioContext.destination);
            audioElement.play();
            audioPlaying = true;
        }
      }
    return(
        <div className="video-background" onClick={() => audioPlay()}>
      <video autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="menu">
        {children}
      </div>
    </div> 
    );
}
export default Background;