const db = firebase.firestore();

$(`.signUp button`).click(function() {
    const id = $(`#id input`).val();
    const pw = $(`#pw input`).val();
    const rePw = $(`#rePw input`).val();
    const phone = $(`#phone input`).val();
    const email = $(`#email input`).val();

    if(pw === rePw) {    
        firebase.auth().createUserWithEmailAndPassword(id+"@nothing.com", pw).then((result) => {
            db.collection('userInfo').doc(result.user.uid).set({ phone : phone, email : email })
        });
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
})
