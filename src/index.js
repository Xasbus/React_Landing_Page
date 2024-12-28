import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(window.bodyTag);

root.render(
  <body>
    <header>
      <nav></nav>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>
              Redmi Turbo 3<br></br>Harry Potter Limited Edition
            </h1>
          </div>
          <div class="col">CANT RENDER PICTURE</div>
        </div>
      </div>
    </main>
    <footer>Website is created by David Billiot</footer>
  </body>
);
