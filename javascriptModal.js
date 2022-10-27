//const enterWebsiteModal = document.getElementById('enter-website-modal');

var enterWebsiteModal = new bootstrap.Modal(document.getElementById("enter-website-modal"), {});

const carouselContainer = document.getElementById('carouselExampleFade');

carouselContainer.onclick = function () {
    enterWebsiteModal.show();
}

//(enterWebsiteModal('show'));


/*
enterWebsite.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title')
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})

*/