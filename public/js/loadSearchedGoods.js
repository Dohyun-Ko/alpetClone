const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

db.collection(`goods`)
  .get()
  .then((snapshot) => {
      snapshot.forEach((goods) => {
        const name = goods.data().name;  
        if(name.includes(localStorage.getItem(`keyword`)))
          {
            const goodsBox = `<div class="col mb-4">
            <div class="card h-100">
              <img src=${goods.data().imgUrl} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${goods.data().name}</h5>
                <p class="card-text">${goods.data().price.toString()}원</p>
              </div>
            </div>
          </div>`;
          console.log($(`.goodsList .card-group`));
          $(`.goodsList .row`).append(goodsBox);
          }
      })
  });
