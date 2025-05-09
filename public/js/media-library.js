// Handle file upload preview
function handleFilePreview(input, previewElement) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewElement.src = e.target.result;
            previewElement.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// URL copying functionality has been removed

// Initialize media library functionality
document.addEventListener('DOMContentLoaded', function() {
    // File preview
    const fileInput = document.getElementById('file');
    const preview = document.getElementById('preview');
    if (fileInput && preview) {
        fileInput.addEventListener('change', function() {
            handleFilePreview(this, preview);
        });
    }

    // Copy URL functionality has been removed
});