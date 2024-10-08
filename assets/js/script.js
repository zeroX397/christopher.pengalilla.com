var buttons = document.querySelectorAll(".view-btn");
var modals = document.querySelectorAll(".modal");

buttons.forEach((btn, index) => {
    btn.onclick = function () {
        modals[index].style.display = "block";
    }
});

modals.forEach((modal) => {
    var span = modal.querySelector(".close");
    span.onclick = function () {
        modal.style.display = "none";
    }
});

window.onclick = function (event) {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}