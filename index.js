function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        alert('Check your inbox!')
    }
    
    input.addEventListener('click', clickAlert);
}


// const input = document.getElementById('button');
// function clickAlert() {
//     alert('Check your inbox!')
// }

// input.addEventListener('click', clickAlert);