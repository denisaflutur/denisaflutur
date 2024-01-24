import './App.css'
import TypewriterComponent from 'typewriter-effect'
import { HackerEffectText } from '@nekzus/react-hacker-effect';
import Toastify from 'toastify-js';
import copy from 'copy-to-clipboard';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
const EMAIL = 'denisaflutur08@gmail.com'
const App = () => {
  // const navigate = useNavigate()
  return (
    <>
      <div className='container'>

        <h1 className='title'>      <TypewriterComponent

          options={{
            strings: ['Denisa Flutur', 'Hello World!'],
            autoStart: true,
            loop: true,
          }}
        /></h1>
        <p className='sub-title' onClick={() => {
          copy(EMAIL)
          Toastify({
            text: "Email copied!",
            style: {
              background: "linear-gradient(to right, #E6A4B4, #D63484)",
            }
          }).showToast()
        }
        }>
          <HackerEffectText initialValue="Say ~$echo 'hello' to me" targetValue={EMAIL} >
            <div></div>
          </HackerEffectText>
        </p>
        <div className='social-icons'>
          <a href="https://www.linkedin.com/in/denisa-flutur/" target='_blank'><IoLogoLinkedin className='linkedin' /></a>
          <a href='https://github.com/denisaflutur' target='_blank'><IoLogoGithub className='github' /></a>
        </div>
      </div>
    </>
  )
}

export default App
