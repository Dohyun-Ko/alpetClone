const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

db.collection(`test`).add({ name: `test` }).then(()=>
    {console.log(`success`);}
);

console.log('1234');

$(`#btnUpload`).click(() => {
    const goodsImg = $(`#inputGoodsImg`).files[0];
    const imgUpload = storageRef.child(`goodsImg/${file.name}`).put(file);
    imgUpload.on(`state_changed`,
        null,

        (error) => {
            alert(error);
        },
        () => {
            imgUpload.snapshot.ref.getDownloadURL().then((url) => {
                const aGoods = {
                    imgUrl : url,
                    name : $(`#inputGoodsName`).val(),
                    price : $(`#inputGoodsPrice`).val(),
                }
                db.collection(`goods`).add(aGoods).then((docRef) => {
                    if($(`#checkDiscount`).prop("checked")) {
                        //db.collection(`tagList`).doc(`discount`)
                    }
                });
            });
        }
    )



})