import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contactInfo">
        <h3>Contact Us</h3>
        <p>
          Address: Box 118400 College of Journalism and Communications
          Gainesville, FL 32611-8400
        </p>
        <p>FSPA Office: 352.214.8650 (Voicemail Only)</p>
        <div>
          Email: <button>fspa.pres@gmail.com</button>
          <button>fspaoffice@gmail.com</button>
        </div>
      </div>
      <div className="socialMedia">
        <h3>Follow Us</h3>
      </div>
    </footer>
  );
}
