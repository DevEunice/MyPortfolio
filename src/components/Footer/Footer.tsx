import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'


export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Eunice</span>
        <span>Obebe</span>
      </a>
      <div>
        <p>
          {/* This Website was made with <img src={reactIcon} alt="React" /> */}
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/eunice-obebe/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/DevEunice"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B9036036393&text=Hello+Eunice"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  )
}
