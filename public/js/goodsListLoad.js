const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

document.querySelector(`.header h1`).innerHTML = localStorage.getItem(`category`);
$(`.header i`).click(() => {
    location.href = `index.html`;
})

db.collection(`tagList`)
  .doc(localStorage.getItem(`category`))
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

