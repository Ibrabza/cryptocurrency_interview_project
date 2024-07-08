import "./App.css";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Title from "./components/Title/Title";
import SubscribeLink from "./components/SubscribeLink/SubscribeLink";
import Stats from "./components/Stats/Stats";
import WhatsAppJoinButton from "./components/WhatsAppJoinButton/WhatsAppJoinButton";
import AppDownload from "./components/AppDownload/AppDownload";

import iosIcon from "./images/app-store-svgrepo-com 1.svg";
import androidIcon from "./images/google-play-svgrepo-com (1) 1.svg";

function App() {
  return (
    <div className="App_container">
      <Title />
      <div className="App_feedback__block">
        <Feedbacks />
      </div>
      <SubscribeLink />
      <Stats subscribers="20k+" cases="19,6k" rating="4.8/5" />
      <WhatsAppJoinButton />
      <div className="App_buttons">
        <AppDownload
          link="https://play.google.com/"
          icon={androidIcon}
          name="Google Play"
          text="get it on"
        />
        <AppDownload
          link="https://www.apple.com/app-storea"
          icon={iosIcon}
          name="App Store"
          text="Available on the"
        />
      </div>
    </div>
  );
}

export default App;
