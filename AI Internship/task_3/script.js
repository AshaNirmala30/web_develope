// Handle the form submission for travel stories
document.addEventListener('DOMContentLoaded', function () {
    const storyForm = document.querySelector('form');
    const storyList = document.querySelector('.story-list');
    const storyInput = document.querySelector('textarea[name="story"]');
    const photoInput = document.querySelector('input[type="file"]');
    const submitButton = document.querySelector('button[type="submit"]');

    // Event listener to handle form submission
    storyForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission (page refresh)

        // Get the story text and photo data
        const storyText = storyInput.value;
        const photo = photoInput.files[0];

        if (storyText.trim() === '') {
            alert('Please write a story before submitting!');
            return;
        }

        // Create a new story item element
        const newStoryItem = document.createElement('div');
        newStoryItem.classList.add('story-item');

        // Set up the story HTML content
        const storyHTML = `
            <h3>Your New Bus Journey</h3>
            <p>${storyText}</p>
            <div class="social-share">
                <a href="#" class="facebook"><i class="fab fa-facebook-f"></i> Share</a>
                <a href="#" class="twitter"><i class="fab fa-twitter"></i> Share</a>
            </div>
        `;

        // If a photo is uploaded, display it
        if (photo) {
            const photoURL = URL.createObjectURL(photo);
            newStoryItem.innerHTML = `
                <h3>Your New Bus Journey</h3>
                <img src="${photoURL}" alt="Travel Photo">
                <p>${storyText}</p>
                <div class="social-share">
                    <a href="#" class="facebook"><i class="fab fa-facebook-f"></i> Share</a>
                    <a href="#" class="twitter"><i class="fab fa-twitter"></i> Share</a>
                </div>
            `;
        } else {
            newStoryItem.innerHTML = storyHTML;
        }

        // Append the new story item to the story list
        storyList.prepend(newStoryItem);

        // Clear the form fields
        storyInput.value = '';
        photoInput.value = '';

        // Optionally, show a message to the user
        alert('Your travel story has been submitted!');
    });

    // Social media share buttons (you can customize this functionality further)
    document.querySelectorAll('.social-share a').forEach(shareButton => {
        shareButton.addEventListener('click', function (e) {
            e.preventDefault();
            const platform = e.target.closest('a').classList.contains('facebook') ? 'Facebook' : 'Twitter';
            alert(`Shared on ${platform}! (This is just a demo; actual sharing functionality can be added later.)`);
        });
    });
});
