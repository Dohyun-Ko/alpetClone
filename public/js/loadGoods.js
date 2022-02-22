const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

function loadCards(tagName){
  db.collection(`tagList`)
    .doc(tagName)
    .get()
    .then((doc) => {
      if (doc.exists) {
        doc.data().list.forEach((goods) => {
          db.collection("goods")
            .doc(goods)
            .get()
            .then((temp) => {
              const goodsBox = `<div class="col mb-4">
              <div class="card h-100">
                <img src=${temp.data().imgUrl} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${temp.data().name}</h5>
                  <p class="card-text">${temp.data().price.toString()}원</p>
                </div>
              </div>
            </div>`;
              console.log($(`.goodsList .card-group`));
              $(`.goodsList .row`).append(goodsBox);
            });
        });
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  }

function removeCards() {
  document.querySelectorAll(`.goodsList .row .col`).forEach((card) => {
    card.remove();
  })
}

function categoryClicked(category) {
  removeCards();
  loadCards(category);
  document.querySelectorAll(`.goodsCategory ul li a`).forEach((a) => {
    a.classList.remove(`active`);
  })
  document.querySelector(`#${category}`).classList.add(`active`);
}

loadCards("discount");

$(`#discount`).click((event) => {
  event.preventDefault();
  categoryClicked(`discount`);
})
$(`#new`).click((event) => {
  event.preventDefault();
  categoryClicked(`new`);
})
$(`#season`).click((event) => {
  event.preventDefault();
  categoryClicked(`season`);
})
$(`#winter`).click((event) => {
  event.preventDefault();
  categoryClicked(`winter`);
})
$(`#all-in-one`).click((event) => {
  event.preventDefault();
  categoryClicked(`all-in-one`);
})
$(`#t-shirt`).click((event) => {
  event.preventDefault();
  categoryClicked(`t-shirt`);
})
$(`#harness`).click((event) => {
  event.preventDefault();
  categoryClicked(`harness`);
})
$(`#sportsWear`).click((event) => {
  event.preventDefault();
  categoryClicked(`sportsWear`);
})

