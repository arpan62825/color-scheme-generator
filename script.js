const generateBtn = document.querySelector(".generate-btn");
let colorColumnDiv = document.querySelector(".color-columns");

generateBtn.addEventListener("click", addQueryString);

function addQueryString() {
  let colorInput = document.querySelector(".color-input").value;
  colorInput = colorInput.replace("#", "");
  const colorScheme = document.querySelector(".color-scheme").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${colorScheme}&count=5`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => {
      colorColumnHtml = "";
      const schemeColorsArr = data.colors;
      for (let colors of schemeColorsArr) {
        const colorsHexValue = colors.hex.value;
        const colorsNameValue = colors.name.value;
        const contrastFontColor = colors.contrast.value;
        colorColumnHtml += `
          <div class="color-column" style="background-color:${colorsHexValue}; color:${contrastFontColor};">
            <p>${colorsNameValue}</p>
            <p>${colorsHexValue}</p>
          </div>
        `;
      }
      colorColumnDiv.innerHTML = colorColumnHtml;
    });
}
