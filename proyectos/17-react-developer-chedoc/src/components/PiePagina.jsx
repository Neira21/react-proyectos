// social
import facebook from '../assets/assets1/social/facebook-white.svg'
import twitter from '../assets/assets1/social/twitter-white.svg'
import instagram from '../assets/assets1/social/instagram-white.svg'

// store
import appStore from '../assets/assets1/store/app-store.svg'
import playStore from '../assets/assets1/store/play-store.svg'
import windowsStore from '../assets/assets1/store/windows-store.svg'

const PiePagina = () => {
  return (
    <div className="piePagina">
        <div>
          <ul className="lista">
            <li className="lista-element">
              Home
            </li>
            |
            <li className="lista-element">
              Terms and Conditions
            </li>
            |
            <li className="lista-element">
              Privacy Policy
            </li>
            |
            <li className="lista-element">
              Collection statement
            </li>
            |
            <li className="lista-element">
              Help
            </li>
            |
            <li className="lista-element">
              Manage Account
            </li>
          </ul>
          <p className='copy'>
            Copyrigth © 2023 Demo Streaming. All Rights Reserved
          </p>
        </div>
        <div className='redes_descarga'>
          <div className="redesSociales">
            <img src={facebook} alt="Facebook-logo" />
            <img src={twitter} alt="Twitter-logo" />
            <img src={instagram} alt="Instagram-logo" />
          </div>
          <div className="descarga">
            <img src={appStore} alt="" />
            <img src={playStore} alt="" />
            <img src={windowsStore} alt="" />
          </div>
        </div>
      </div>
  )
}

export default PiePagina