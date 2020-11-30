let endcardControl = document.createElement("div");
endcardControl.innerHTML = `<div
  id="endcardcontroller"
  class="ytp-menuitem"
  role="menuitemcheckbox"
  aria-checked="true"
  tabindex="0"
>
<div class="ytp-menuitem-icon"></div>
<div class="ytp-menuitem-label">Hide endcards</div>
<div class="ytp-menuitem-content">
  <div class="ytp-menuitem-toggle-checkbox"></div>
</div>
</div>`;
endcardControl = endcardControl.firstChild;
document.querySelector(".ytp-panel-menu").appendChild(endcardControl);

function setEndcardsVisibile(visibility) {
  endcards = document.getElementsByClassName("ytp-ce-element");
  for (i = 0; i < endcards.length; i++) {
    endcards[i].hidden = !visibility;
  }
}

function getControlValue() {
  return (
    document.getElementById("endcardcontroller").getAttribute("aria-checked") ==
    "true"
  );
}

function setControlValue(value) {
  document
    .getElementById("endcardcontroller")
    .setAttribute("aria-checked", value);
}

function toggle() {
  let checked = getControlValue();

  if (checked) setEndcardsVisibile(true);
  else setEndcardsVisibile(false);

  // Toggle the control
  setControlValue(!checked);
}

document.getElementById("endcardcontroller").addEventListener("click", toggle);

setEndcardsVisibile(false);
