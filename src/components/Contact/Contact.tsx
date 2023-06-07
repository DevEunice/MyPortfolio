import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Contact me for Frontend and Backend roles </p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:obebeeunice@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:obebeeunice@gmail.com.com">obebeeunice@gmail.com</a>
        </div>
        <div>
        <a href="tel:+2349036036393"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+2349036036393">(+234) 9036036393</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}