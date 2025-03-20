function selectOption(element, pairCount) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    element.querySelector('input').checked = true;
    updateTotalPrice();
}

function updateTotalPrice() {
    const selectedOption = document.querySelector('input[name="bundle"]:checked');
    const totalPrice = document.getElementById("total-price");

    if (selectedOption) {
        totalPrice.textContent =  selectedOption.getAttribute("data-total") + "USD";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("change", function (event) {
        if (event.target.name === "bundle") {
            updateTotalPrice(); 
        }
    });
});
