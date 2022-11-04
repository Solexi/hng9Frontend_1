import ZuriInternship_Logo from '../../images/ZuriInternship_Logo.png';
import I4G from '../../images/I4G.png';
import './index.css'

const Footer = () => {
    return(
        <>
            <hr />
            <div className = "footerElements">
                <img src = {ZuriInternship_Logo} alt = "" className = "Zuri"/>
                <p className = "hngTask"> HNG Internship 9 Frontend Task</p>
                <img src = {I4G} alt = "" className = "I4G"/>
            </div>
        </>
    )
}

export default Footer;