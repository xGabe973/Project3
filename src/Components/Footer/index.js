import React from "react";
import "./style.css";

const buttonColor ={backgroundColor: '#e8a87c', color: '#000'};

function Footer() {
    return(
        <footer  id="pageFooter" className="footer text-center text-muted">
        ​<div class="member-names">
          <a style={buttonColor} href="https://github.com/xGabe973"  target="_blank" rel="noopener noreferrer"class="btn btn-secondary mb-3 mr-4 footerBtn"><span
              className="fab fa-github pr-2"></span>Gabe</a>
          ​
          <a style={buttonColor} href="https://github.com/anexfoxtek"  target="_blank" rel="noopener noreferrer" class="btn btn-secondary mb-3 mr-4"><span
              className="fab fa-github pr-2"></span>Luke</a>
          ​
          <a style={buttonColor} href="https://github.com/jennyelisa"  target="_blank" rel="noopener noreferrer" class="btn btn-secondary mb-3 mr-4"><span
              className="fab fa-github pr-2"></span>Jenny</a>
          ​
          ​
          <a style={buttonColor} href="https://github.com/J-Mey"  target="_blank" rel="noopener noreferrer" class="btn btn-secondary mb-3 mr-4" ><span
              className="fab fa-github pr-2"></span>Jeremy</a>
          ​</div>
  
      </footer>
    );
    
}

export default Footer;