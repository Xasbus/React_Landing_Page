import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(window.bodyTag);

root.render(
  <body>
    <header>
      <nav></nav>
    </header>
    <main>
      <div class="topPic">
        <h1 class="">
          Redmi Turbo 3<br></br>Harry Potter Limited Edition
        </h1>
        <br></br>
        <h3 class="">
          This Harry Potter Xiaomi Redmi Turbo 3<br /> actually looks worthy of
          wizarding world
        </h3>
      </div>
      <section class="container">
        <h2>
          Who needs a wand when you've <br />
          got a Harry Potter-themed phone
        </h2>

        <p>
          Xiaomi has unveiled a magical-looking Harry Potter edition of the
          Xiaomi Redmi Turbo 3 that could enchant fans of the books and films.
        </p>
        <p>
          The Harry Potter edition of the latest Redmi Turbo 3 was revealed in
          China, although one version is going on sale globally. It features a
          host of Harry Potter-themed embellishments, including an ornate Diagon
          Alley-style presentation box with a Hogwarts school badge pin, a
          themed case, a custom charger, and themed animations and wallpapers.
        </p>
        <p>
          The Redmi Turbo 3's design features a vibrant blue and gold back panel
          with a prominent Hogwarts emblem at the forefront, accompanied by the
          inscription "Harry Potter" below it. The camera flash also has a
          lightning bolt with a wand and the word "Lumos" next to it. The blue
          section features illustrations of Harry Potter lore, including the
          dreaded Horcruxes.
        </p>
        <h6>About the Phone</h6>
        <ul>
          <li>6.67-inch 120Hz OLED display.</li>
          <li>Qualcomm Snapdragon 8s Gen 3 processor.</li>
          <li>16GB LPDDR5X RAM, 512GB UFS 4.0 storage.</li>
          <li>50MP+8MP rear dual-cameras, a 16MP selfie camera.</li>
          <li>5000mAh battery, 90W Fast Flash Charge.</li>
        </ul>
      </section>
      <section class="middleSection">
        <p class="fw-bold, centerMidSec">
          Amazing Features
          <br />
          Power, Elegance, Speed, Luxury
        </p>
        <div class="row, border border-success">
          <div class="col">SECTION 1</div>
          <div class="col">SECTION 1</div>
          <div class="col">SECTION 1</div>
        </div>
        <div class="row, border border-danger">
          <div class="col">SECTION 2</div>
          <div class="col">SECTION 2</div>
          <div class="col">SECTION 2</div>
        </div>
        <div class="row, border border-info">
          <div class="col">SECTION 3</div>
          <div class="col">SECTION 3</div>
          <div class="col">SECTION 3</div>
        </div>
      </section>
    </main>
    <footer class="container">Website is created by David Billiot</footer>
  </body>
);
