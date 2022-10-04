const bookmarkTab = document.getElementById("bookmark-tab");
const searchingTab = document.getElementById("searching-tab");
const sharingTab = document.getElementById("sharing-tab");
const email = document.getElementById("email");

const form = document.querySelector("form");
const bookmark = document.querySelector(".bookmarking");
const searching = document.querySelector(".searching");
const sharing = document.querySelector(".sharing");
const errorMessage = document.querySelector(".error-msg");
const question = document.querySelectorAll(".question-container");
const valid = document.querySelector(".isInValid");
//Functions
function checkEmail(email) {
  var filter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email)) {
    return false;
  }
}

function toggleError(border, visible, msg = "") {
  email.style.border = border;
  errorMessage.style.visibility = visible;
  errorMessage.innerHTML = msg;
  email.classList.add("isInValid");
  return;
}

function toggleContent(event) {
  const initBorder = `1px solid hsl(229, 8%, 60%)`;
  const redBorder = `0.25rem solid hsl(0, 94%, 66%)`;

  bookmark.style.display = "none";

  sharing.style.display = "none";

  searching.style.display = "none";

  bookmarkTab.style.borderBottom = initBorder;
  sharingTab.style.borderBottom = initBorder;
  searchingTab.style.borderBottom = initBorder;

  const { id } = event.target;
  switch (id) {
    case "bookmark-tab":
      bookmark.style.display = "contents";
      bookmarkTab.style.borderBottom = redBorder;
      break;

    case "sharing-tab":
      sharing.style.display = "contents";
      sharingTab.style.borderBottom = redBorder;
      break;

    case "searching-tab":
      searching.style.display = "contents";
      searchingTab.style.borderBottom = redBorder;
      break;

    default:
      break;
  }
}

//Event Listeners
question.forEach((ask) => {
  ask.addEventListener("click", function (e) {
    if (ask.classList.contains("active")) {
      ask.classList.remove("active");
    } else {
      ask.classList.add("active");
    }
  });
});
bookmarkTab.addEventListener("click", toggleContent);
searchingTab.addEventListener("click", toggleContent);
sharingTab.addEventListener("click", toggleContent);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  let emailData = data.get("email");
  console.log(emailData);
  email.classList.remove("isInValid");
  if (email.value === "") {
    toggleError(
      `2px solid red`,
      "visible",
      "Whoops! It looks like you forgot to add your email"
    );
  } else if (checkEmail(emailData) === false) {
    toggleError(
      `2px solid red`,
      "visible",
      "Please provide a valid email address"
    );
  } else {
    toggleError("2px solid white", "hidden");
  }
});
