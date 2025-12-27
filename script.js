// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });


// Get modal element and close button
var modal = document.getElementById('rightClickModal');
var closeModal = document.getElementById('closeModal');

// Event listener to block right-click and show modal
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Right-click ko block karna
    modal.style.display = 'block'; // Modal ko show karna
});

// Close modal when the user clicks on the "Close" button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Modal ko hide karna
});

// Close modal if the user clicks anywhere outside of the modal
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none'; // Modal ko hide karna
    }
});
