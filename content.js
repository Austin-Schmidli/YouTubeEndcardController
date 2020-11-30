function setEndcardsVisibile(visibility) {
  endcards = document.getElementsByClassName("ytp-ce-element");
  for (i = 0; i < endcards.length; i++) {
    endcards[i].hidden = !visibility;
  }
}

function getControlState() {
  return (
    document.getElementById("endcardcontroller").getAttribute("aria-checked") ==
    "true"
  );
}

function setControlState(state) {
  document
    .getElementById("endcardcontroller")
    .setAttribute("aria-checked", state);
}

function handleControl() {
  // Toggle current state
  let newState = !getControlState();

  setEndcardsVisibile(newState);
  setControlState(newState);
  saveState(newState);
}

function injectControl() {
  const controlHTML = `<div
    id="endcardcontroller"
    class="ytp-menuitem" 
    role="menuitemcheckbox"
    aria-checked="true"
    tabindex="0"
  >
    <div class="ytp-menuitem-icon"></div>
    <div class="ytp-menuitem-label">Show endcards</div>
    <div class="ytp-menuitem-content">
      <div class="ytp-menuitem-toggle-checkbox"></div>
    </div>
  </div>`;

  // Construct the control then inject it into the DOM
  let endcardControl = document.createElement("div");
  endcardControl.innerHTML = controlHTML;
  endcardControl = endcardControl.firstChild;
  document.querySelector(".ytp-panel-menu").appendChild(endcardControl);

  document
    .getElementById("endcardcontroller")
    .addEventListener("click", handleControl);
}

function saveState(state) {
  chrome.storage.sync.set({ showEndcards: state });
}

function loadState() {
  chrome.storage.sync.get(["showEndcards"], function (result) {
    state = result.showEndcards;

    setControlState(state);
    setEndcardsVisibile(state);
  });
}

let injectedControl = false;
document.body.addEventListener("yt-navigate-finish", function (event) {
  if (!!document.querySelector(".ytp-panel-menu")) {
    if (!injectedControl) {
      injectControl();
      injectedControl = true;
    }
    loadState();
  }
});
