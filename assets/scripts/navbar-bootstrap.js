import { LitElement, html } from 'https://jspm.dev/lit-element@2';

export class Navbar extends LitElement {

  createRenderRoot() {
	return this;
  }

  render(){
	return html`
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
		<div class="container">
		  <a class="navbar-brand" href="index.html"><span id="sitename" property>Yax</span></a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto">
			  <li class="nav-item">
				<a class="nav-link" href="index.html"><span id="navlink1" property>Home</span></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="2.html"><span id="navlink2" property>About</span></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="3.html"><span id="navlink3" property>Services</span></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="4.html"><span id="navlink3" property>Team</span></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="5.html"><span id="navlink3" property>Contact</span></a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	`;
  }
}
customElements.define('navbar-bootstrap', Navbar);