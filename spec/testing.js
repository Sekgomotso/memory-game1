const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>Memory game</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section class="game-container">
    <div class="game-card" data-framework="beauty">
      <img class="front-face" src="img/beauty.jpg" alt="Beauty" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>  
    <div class="game-card" data-framework="books">
      <img class="front-face" src="img/books.jpg" alt="Books" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>

    <div class="game-card" data-framework="beauty">
      <img class="front-face" src="img/beauty.jpg" alt="Beauty" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />        </div>
    <div class="game-card" data-framework="books">
      <img class="front-face" src="img/books.jpg" alt="Books" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>

    <div class="game-card" data-framework="elephants">
      <img class="front-face" src="img/elephs.jpg" alt="Elephants" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>
    <div class="game-card" data-framework="domino">
      <img class="front-face" src="img/domino.jpg" alt="Domino" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>

    <div class="game-card" data-framework="domino">
      <img class="front-face" src="img/domino.jpg" alt="Domino" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>
    <div class="game-card" data-framework="oia">
      <img class="front-face" src="img/oia.jpg" alt="Oia" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>

    <div class="game-card" data-framework="indonesia">
      <img class="front-face" src="img/indonesia.jpg" alt="Indonesia" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>
    <div class="game-card" data-framework="indonesia">
      <img class="front-face" src="img/indonesia.jpg" alt="Indonesia" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>

    <div class="game-card" data-framework="elephants">
      <img class="front-face" src="img/elephs.jpg" alt="Elephants" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>
    <div class="game-card" data-framework="oia">
      <img class="front-face" src="img/oia.jpg" alt="Oia" />
      <img class="back-face" src="img/cover.jpg" alt="cover" />
    </div>

    <div class="footer">
      <button>Play</button>
      <span id = "time-remaining">Time: 30</span>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
`

module.exports = html;