const acc = document.getElementsByClassName("accordion");
const items = document.getElementsByClassName("items");
const words = document.getElementsByClassName("words");
const segmenter = new Intl.Segmenter("zh-Hant", { granularity: "grapheme"});


for (let i = 0; i < acc.length; i++ ) {
    const childitems = items[i].children;
    let ptotal = 0;
    for (let childitem of childitems) {
        const pwords = childitem.textContent.replace(/\s/g, '');
        const segments = segmenter.segment(pwords);
        const parr = Array.from(segments).length;
        ptotal += parr;
    }
    words[i].textContent=`【內文有${ptotal}字】`;
    acc[i].addEventListener("click", function(){
        for (let j = 0; j < acc.length; j++ ){
            if (acc[i]!== acc[j]){
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.classList.remove("open");
            }
        }
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("open");
    });
}