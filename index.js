function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        alert('Check your inbox!')
    }
    input.addEventListener('click', clickAlert);
}

addingEventListener()

// const input = document.getElementById("button");
// function clickAlert() {
//   alert("Check your inbox!");
// }

// input.addEventListener("click", clickAlert);

// const input = document.getElementById("button");
// input.addEventListener("click", function () {
//   alert("I was clicked");
// });
