const bookmarkTab = document.getElementById("bookmark-tab");
const searchingTab = document.getElementById("searching-tab");
const sharingTab = document.getElementById("sharing-tab");

const bookmark = document.querySelector(".bookmarking");
const searching = document.querySelector(".searching");
const sharing = document.querySelector(".sharing");

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

bookmarkTab.addEventListener("click", toggleContent);
searchingTab.addEventListener("click", toggleContent);
sharingTab.addEventListener("click", toggleContent);
