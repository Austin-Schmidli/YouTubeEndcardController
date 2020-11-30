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

function setEndcardsVisibile(visible) {
  endcards = document.getElementsByClassName("ytp-ce-element");
  for (i = 0; i < endcards.length; i++) {
    endcards[i].hidden = !visible;
  }
}

function toggle() {
  let checkbox = document.getElementById("endcardcontroller");
  let checked = checkbox.getAttribute("aria-checked") == "true";

  if (checked) setEndcardsVisibile(true);
  else setEndcardsVisibile(false);

  checkbox.setAttribute("aria-checked", !checked);
}

setEndcardsVisibile(false);
document.getElementById("endcardcontroller").addEventListener("click", toggle);
