function ButtonClickAction() {
  let text = "";
  document.querySelectorAll('div.view-line').forEach(a => { text += a.textContent; text += "\n" });
  text = text.replace(/\u00A0/g, " ");
  GM_setClipboard(text);
}

function addBtn() {
  let zNode = document.createElement('div');
  zNode.innerHTML = '<button id="myButton" type="button">'
    + 'CopyCode</button>';
  zNode.setAttribute('id', 'myContainer');
  let tmp = document.querySelector('div.second-section-container__2cAh')!;
  tmp.appendChild(zNode);
  //--- Activate the newly added button.
  document.getElementById("myButton")!.addEventListener(
    "click", ButtonClickAction, false
  );
};
window.addEventListener('load', function () {
  addBtn();
}, false);
export { };