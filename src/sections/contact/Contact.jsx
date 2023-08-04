import './contact.css';
import contacts from './data'

const Contact = () => {
  return (
    <section  id='contact'>
      <h2>Get In Touch</h2>
      <p>Feel free to shoot me a message via any of the links below! I would love to connect with you</p>
      <div className="container contact-container" data-aos='fade-up'>
        {contacts.map((contact)=>(
          <a href={contact.link} key={contact.id} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>
        ))}
      </div>
    </section>
  )
}

export default Contact;
