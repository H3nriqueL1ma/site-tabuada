import $ from "jquery";

const body_content: JQuery<HTMLBodyElement> = $("body");
const header: JQuery<HTMLElement> = $("header");
const footer: JQuery<HTMLElement> = $("footer");

if (header.length > 0) {
  header.append(
    '<span id="title" style="display:none"><h1>Tabuada</h1></span>'
  );
  header.find("span#title").fadeIn();
}

if (body_content.length > 0) {
  body_content.append(
    '<span id="span-content" style="display:none"><section id="_content"><div id="content">Número: <input type="number" name="num" id="num" max="99999"><button>Iniciar</button></div><div id="result"><br><textarea name="text" id="text" cols="20" rows="5" readonly style="resize:none"></textarea></div></section></span>'
  );
  body_content.find("span#span-content").fadeIn();
}

if (footer.length > 0) {
  footer.append(
    '<span id="span-footer" style="display:none"><a href="https://github.com/H3nriqueL1ma" target="_blank"><img src="images/github.svg" alt="image" id="img"></a></span>'
  );
  footer.find("span#span-footer").fadeIn();
}

const button: JQuery<HTMLButtonElement> = $("button");
button.on("click", () => {
  const numInput: JQuery<HTMLInputElement> = $("#num");

  if (numInput.length > 0) {
    const num = Number(numInput.val());
    const result: JQuery<HTMLTextAreaElement> = $("#text");

    result.empty();

    if (isFinite(num)) {
      if (num === 0) {
        alert("[ERROR]: Insira um número acima de 0!");
      } else {
        for (let c = 0; c <= 10; c++) {
          const calc: number = num * c;
          result.append(`${num} x ${c} = ${calc}\n`);
        }
      }
    }
  }
});
