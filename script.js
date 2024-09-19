class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<header>
                            <div class="menu">
                            <img id="fullLogo" src="../images/LogoFull.png" alt="Logo">
                            <a href="javascript:void(0);" class="icon" onclick="myFunction()">☰</a>
                            <menu class="navbar" id="myNavbar">
                                <ul id="menuOptions">
                                    <a href="Home.html">Home</a>
                                    <a href="OurStuff.html">Our Stuff</a>
                                    <a href="HireUs.html">Hire Us</a>
                                </ul>
                            </menu>
                            <div id="menuLinks">
                                <a href="https://yorkphotosoc.substack.com" target="_blank"><img id="menuLink" src="../images/appatureLogo.png" alt="Apparture Logo"></a>
                                <a href="https://www.instagram.com/yorkphotosoc/?igsh=MTB1MWt6bjEzMGIxeQ%3D%3D" target="_blank"><img id="menuLink" src="../images/InstagramLogo.png" alt="Insta Logo"></a>
                                <a href="https://www.instagram.com/yorkphotosoc/?igsh=MTB1MWt6bjEzMGIxeQ%3D%3D" target="_blank"><img id="menuLink" src="../images/WhatsappLogo.png" alt="Insta Logo"></a>
                            </div>
                        </div>
                        <div class="dropDownMenu" id="myDropDownMenu">
                            <ul style="list-style: none">
                                <li><a href="home.html">Home</a></li>
                                <li><a href="OurStuff.html">Our Stuff</a></li>
                                <li><a href="HireUs.html">Hire Us</a></li>
                                <li id="dropDownMenuLinks">
                                    <a href="https://yorkphotosoc.substack.com" target="_blank"><img id="menuLink" src="../images/appatureLogo.png" alt="Apparture Logo"></a>
                                    <a href="https://www.instagram.com/yorkphotosoc/?igsh=MTB1MWt6bjEzMGIxeQ%3D%3D" target="_blank"><img id="menuLink" src="../images/InstagramLogo.png" alt="Insta Logo"></a>
                                    <a href="https://www.instagram.com/yorkphotosoc/?igsh=MTB1MWt6bjEzMGIxeQ%3D%3D" target="_blank"><img id="menuLink" src="../images/WhatsappLogo.png" alt="Insta Logo"></a>
                                </li>
                            </ul>
                        </div>
                    </header>`;
    }
}

customElements.define('header-component', Header);

function myFunction() {
    var x = document.getElementById("myDropDownMenu");
    if (x.className === "dropDownMenu") {
    x.className += " responsive";
    } else {
    x.className = "dropDownMenu";
    }
}

function shutMenu() {
    var x = document.getElementById("meDropDownMenu");
    x.className = "dropDownMenu";
}