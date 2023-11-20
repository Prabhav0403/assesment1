document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
    var firstName = document.getElementById('first-name').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var email = document.getElementById('email').value.trim();
    var jobRole = document.getElementById('job-role').value;
    var address = document.getElementById('address').value.trim();
    var city = document.getElementById('city').value.trim();
    var pincode = document.getElementById('pincode').value.trim();
    var date = document.getElementById('date').value;
    var cv = document.getElementById('cv').value.trim();
    if (!firstName || !lastName || !email || !jobRole || !address || !city || !pincode || !date || !cv) {
        alert('Please fill in all the fields.');
        event.preventDefault(); // Prevent form submission
    }
    });
});
