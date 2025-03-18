
        // Example data for ratings and reviews
        const reviews = [
            { rating: 5, review: "Great experience! The bus was on time and comfortable." },
            { rating: 4, review: "Good service, but could improve cleanliness." },
        ];

        // Function to calculate and display the average rating
        function calculateAverageRating() {
            const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
            const average = totalRating / reviews.length;
            document.getElementById("averageRating").textContent = average.toFixed(1);
        }

        // Function to display reviews
        function displayReviews() {
            const reviewsList = document.getElementById("reviewsList");
            reviewsList.innerHTML = ""; // Clear the existing reviews

            reviews.forEach(review => {
                const reviewItem = document.createElement("div");
                reviewItem.classList.add("review-item");

                const rating = document.createElement("p");
                rating.classList.add("rating");
                rating.textContent = `Rating: ${review.rating}/5`;

                const reviewText = document.createElement("p");
                reviewText.textContent = review.review;

                reviewItem.appendChild(rating);
                reviewItem.appendChild(reviewText);

                reviewsList.appendChild(reviewItem);
            });
        }

        // Handle form submission
        document.getElementById("reviewForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const rating = parseInt(document.getElementById("rating").value);
            const reviewText = document.getElementById("review").value;

            // Add the new review to the reviews array
            reviews.push({ rating, review: reviewText });

            // Recalculate and display the average rating
            calculateAverageRating();

            // Display the updated reviews
            displayReviews();

            // Reset the form
            document.getElementById("reviewForm").reset();
        });

        // Initialize the page with existing reviews and average rating
        calculateAverageRating();
        displayReviews();
    
