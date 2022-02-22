document.querySelector(`#topBannerUnder #search`).addEventListener(`submit`, search);

function search(event) {
    event.preventDefault();
    localStorage.setItem("keyword", $(`#topBannerUnder #search input`).val());
    location.href = `searchPage.html`;
}