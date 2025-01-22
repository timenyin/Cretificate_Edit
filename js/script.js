function populateCertificate() {
    const form = document.getElementById('certificateForm');
    const data = new FormData(form);

    // Populate certificate fields
    data.forEach((value, key) => {
        const field = document.querySelector(`.certificate-text.${key}`);
        if (field) {
            field.textContent = value;
        }
    });

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('certificateModal'));
    modal.hide();
}