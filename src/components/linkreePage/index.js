import profile from '../../images/profile.jpeg';
import share_button from '../../images/share_button.png';
import slack from '../../images/slack.png';
import github from '../../images/github.png'
import './index.css'

const LinktreePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={share_button} alt="share_button" className="shareBtn" />
                <img src={profile} id="profile_img" className="profile" alt="profile" />
                <p id="twitter" className="Tusername"> Sophia Ezeh </p>
                <p id="slack"> solexi_ez </p>

                <a className="ZuriBtn" href="https://twitter.com/EzSolexi"> Twitter Link </a>

                <a id="btn_zuri" className="ZuriBtn" href="https://training.zuri.team/"> Zuri Team </a>

                <a id="books" className="ZuriBtn" href="http://books.zuri.team/"> Zuri Books
                    <p className="subtext"> This is where you find books about design and coding.</p>
                </a>

                <a id="book_python" className="ZuriBtn" href="https://books.zuri.team/python-for-beginners?ref_id=<SophiaEzeh>" > Python Books
                    <p className="subtext"> Best Selling book for learning to code in Python. Get your copy now!</p>
                </a>
                <a id="pitch" className="ZuriBtn" href="https://background.zuri.team"> Background Check for Coders
                    <p className="subtext"> Get a background check for your coders using our service.</p>
                </a>
                <a id="book_design" className="ZuriBtn" href="https://books.zuri.team/design-rules"> Design Books
                    <p className="subtext"> Zuri offers the best book design for FREE! Get started today</p>
                </a>
                <div className="socials">
                    <img src={slack} alt="" />
                    <img src={github} alt="" />
                </div>
            </header>
        </div>
    )
}

export default LinktreePage;