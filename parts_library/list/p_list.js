const copies = document.querySelectorAll(".copy");

Array.from(copies).forEach((copy) => {
    copy.addEventListener('click', function(){
        const parentElement = copy.parentElement;
        const textElement = parentElement.querySelector('.text');
        const text = textElement.textContent;
        navigator.clipboard.writeText(text)
        .then(() => {
            console.log('複製成功!', text);
            copy.textContent = "複製成功!";
            copy.style.backgroundColor = "dodgerblue";
            copy.style.color = "white";
        })
        .catch((error) => {
            console.log('複製失敗');
            copy.textContent = "複製失敗";
        })
    })
})
