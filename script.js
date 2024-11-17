function bookClassroom(classroomId) {
    const classroom = document.querySelector(`.classroom[data-id="${classroomId}"] h3`).innerText;
    const confirmation = confirm(`Do you want to book ${classroom}?`);

    if (confirmation) {
        alert(`${classroom} has been booked successfully!`);
        // Here you would typically send the booking information to your server
        // For example: 
        // fetch('/api/book', { method: 'POST', body: JSON.stringify({ classroomId }) })
    }
}
