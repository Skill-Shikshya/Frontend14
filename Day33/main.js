function LoadContentToMain(child) {
  const twoPhotos = document.getElementsByClassName("twoPhotos")[0];
  twoPhotos.appendChild(child);
  return twoPhotos;
}

function createCard() {
  const Card = document.createElement("div");
  Card.classList.add("cardContainer", "box2");

  const disappear = document.createElement("div");
  disappear.classList.add("disappear");

  const hoverCard = createHoverCard();
  disappear.appendChild(hoverCard);
  Card.appendChild(disappear);

  const img = document.createElement("img");
  img.src =
    "https://as2.ftcdn.net/jpg/02/44/43/69/1000_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg";

  Card.appendChild(img);
  return Card;
}

function createHoverCard() {
  const hoverCard = document.createElement("div");
  hoverCard.classList.add("hoverCard");

  const h6 = document.createElement("h6");
  h6.textContent = "Title from 3 is here";

  const p = document.createElement("p");
  p.textContent = "TDescription goes in here";

  const dimond = document.createElement("div");
  dimond.setAttribute("id", "dimond");

  dimond.innerHTML = `<svg
      viewBox="0 -0.5 17 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="si-glyph si-glyph-diamond"
      fill="#ff0000"
      stroke="#ff0000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>821</title> <defs> </defs>{" "}
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          {" "}
          <path
            d="M7.92950166,15.644 L3.34050166,8.796 C2.88750166,8.342 2.88650166,7.608 3.33750166,7.155 L7.90350166,0.323 C8.35450166,-0.13 9.08950166,-0.128 9.54550166,0.325 L14.0865017,7.175 C14.5405017,7.628 14.5415017,8.363 14.0895017,8.816 L9.57150166,15.646 C9.57150166,15.646 8.38450166,16.097 7.92950166,15.644 Z"
            fill="#ff0000"
            class="si-glyph-fill"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>
    </svg>`;

  hoverCard.appendChild(h6);
  hoverCard.appendChild(p);
  hoverCard.appendChild(dimond);

  return hoverCard;
}

document.addEventListener("DOMContentLoaded", () => {
  const CreatedCard = createCard();
  console.log("hello", CreatedCard);
  const added = LoadContentToMain(CreatedCard);
  console.log("added", added);
});
