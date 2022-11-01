import profile from './profile.jpeg';
import share_button from './share_button.png';
import slack from './slack.png';
import ZuriInternship_Logo from './ZuriInternship_Logo.png';
import I4G from './I4G.png';
import github from './github.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {share_button} alt="share_button" className = "shareBtn"/>
        <img src={profile} id = "profile_img" className="profile" alt="profile"/>
        <p id = "twitter" className = "Tusername"> Sophia Ezeh </p>
        <p id = "slack"> solexi_ez </p>

        <a className="ZuriBtn" href="https://twitter.com/EzSolexi"> Twitter Link </a>

        <a id = "btn_zuri" className="ZuriBtn" href="https://training.zuri.team/"> Zuri Team </a>

        <a id = "books" className="ZuriBtn" href="http://books.zuri.team/"> Zuri Books
          <p className = "subtext"> This is where you find books about design and coding.</p>
        </a>

        <a id = "book_python" className="ZuriBtn" href="https://books.zuri.team/python-for-beginners?ref_id=<SophiaEzeh>" > Python Books
          <p className = "subtext"> Best Selling book for learning to code in Python. Get your copy now!</p>
        </a>
        <a id = "pitch" className="ZuriBtn" href="https://background.zuri.team"> Background Check for Coders
          <p className = "subtext"> Get a background check for your coders using our service.</p>
        </a>
        <a id = "book_design" className="ZuriBtn" href="https://books.zuri.team/design-rules"> Design Books
          <p className = "subtext"> Zuri offers the best book design for FREE! Get started today</p>
        </a>
        <div className = "socials">
          <img src = {slack} alt = ""/>
          <img src = {github} alt = ""/>
        </div>
      </header>
      <footer>
        <div className = "footerElements">
          <img src = {ZuriInternship_Logo} alt = "" className = "Zuri"/>
          <p className = "hngTask"> HNG Internship 9 Frontend Task</p>
          <img src = {I4G} alt = "" className = "I4G"/>
        </div>
      </footer>
    </div>
  );
}

export default App;
