function openModal(img) {
 document.getElementById("modal-img").src = img.src;
 document.querySelector(".modal").classList.add("active");
}

function closeModal() {
 document.querySelector(".modal").classList.remove("active");
}

// перенаправка назад
const backButton = document.querySelector('.back-button');

backButton.addEventListener('click', function() {
  window.history.back();
});
