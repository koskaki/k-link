import './App.css';
import {BsInstagram} from 'react-icons/bs';
import {SlSocialSpotify} from 'react-icons/sl';
import {AiOutlineYoutube} from 'react-icons/ai';
import {PiTiktokLogo} from 'react-icons/pi';
import {LuShoppingCart} from 'react-icons/lu';
function App() {
  return (
    <div>
    <div className="card">
      <div className="card_body">
        <div className="profile text-center ">
          <img src="/asd.jpg" className="avatar"/>
          <h1>hayarahmd</h1>
          <p>Hai, untuk mempermudah perlink'an saya kasih disini semua, terima kasih.</p>
        </div>
        <div className="mt-16">
          <a className="btn_action btn_actionkuning bg_content" href="https://instagram.com/kosuart">
          <BsInstagram/>
            <span>Ilustration</span>
          </a>
        </div>

        <div className="mt-10">
          <a className="btn_action btn_actionkuning2 bg_content" href="https://instagram.com/_koskaki">
          <BsInstagram/>
            <span>Design</span>
          </a>
        </div>

        <div className="mt-10">
          <a className="btn_action bg_content" href="https://instagram.com/hayarahmd">
            <BsInstagram/>
            <span>Instagram</span>
          </a>
        </div>

        <div className="mt-10">
          <a className="btn_action btn_actionpod bg_content" href="https://open.spotify.com/show/7cZCoM3dWh0qOOei9vAHJO?si=cd33e67284224689&nd=1">
          <SlSocialSpotify/>
            <span>Podcast</span>
          </a>
        </div>

        <div className="mt-10">
          <a className="btn_action btn_actionmerah bg_content" href="https://www.youtube.com/@hayarahmd">
            <AiOutlineYoutube/>
            <span> Youtube</span>
          </a>
        </div>

        <div className="mt-10">
          <a className="btn_action btn_actiontt bg_content" href="https://tiktok.com/@hayarahmd">
          <PiTiktokLogo/>
          <span>Tiktok</span>
          </a>
        </div>
        <div className="mt-10 mb-16">
          <a className="btn_action btn_actionhijau bg_content" href="https://tokopedia.com/k-toko">
          <LuShoppingCart/>
          <span>Tokopedia</span>
          </a>
        </div>
    
      </div>
    </div>
  
    </div>
  );
}

export default App;
