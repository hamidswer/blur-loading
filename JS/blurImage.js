const nurseImage=document.querySelector(".nurse-img");
const numebrCounter=document.querySelector(".count-number");
let count=0;
function counter() {
    if (count < 101) {
        numebrCounter.innerHTML="%"+count;
        count++;
        setTimeout(function() {counter();}, 12);
    }
    else {};
};

window.addEventListener("load", (e)=> {
        e.preventDefault();
        nurseImage.classList.add("nurse-img-open");
        counter();
        numebrCounter.classList.add("count-number-deactive");
});