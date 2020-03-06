// navbarmain.js

var navbar = document.getElementById('navBarMain').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: darkcyan;">
    <a class="navbar-brand" href="https://omeronuralpaslan.github.io/">OOAlpaslan</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="https://omeronuralpaslan.github.io/#">Ana Sayfa <span
            class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="https://omeronuralpaslan.github.io/about.html">Hakkımda</a>
        <a class="nav-item nav-link" href="https://omeronuralpaslan.github.io/contact.html">İletişim</a>
      </div>
    </div>
  </nav>
`