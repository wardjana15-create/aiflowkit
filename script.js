document.addEventListener('DOMContentLoaded', function() {

    console.log("AI Flow Kit: Script loaded and DOM is ready!");

    // --- 1. Workflow Expander Logic ---
    const workflowCards = document.querySelectorAll('.workflow-card');

    workflowCards.forEach(card => {
        const header = card.querySelector('.workflow-header');
        
        header.addEventListener('click', () => {
            // Check if the clicked card is already active
            const isCurrentlyActive = card.classList.contains('active');
            
            // First, close all other cards
            workflowCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('active');
                }
            });

            // Then, toggle the clicked card
            if (isCurrentlyActive) {
                card.classList.remove('active');
            } else {
                card.classList.add('active');
            }
        });
    });


    // --- 2. Tool Search Logic ---
    const searchInput = document.getElementById('tool-search');
    const searchButton = document.getElementById('search-btn');
    const toolCards = document.querySelectorAll('.tool-card');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        toolCards.forEach(card => {
            // Get the text content from the tool's name, description, and category
            const toolName = card.querySelector('h3').textContent.toLowerCase();
            const toolDescription = card.querySelector('p').textContent.toLowerCase();
            const toolCategory = card.dataset.category.toLowerCase();

            // Check if the search term exists in any of the text fields
            if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm) || toolCategory.includes(searchTerm)) {
                card.style.display = 'grid'; // Use 'grid' to respect the CSS Grid layout
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    }

    // Add event listeners to the search button and input field
    searchButton.addEventListener('click', performSearch);
    
    // Add real-time search as the user types
    searchInput.addEventListener('input', performSearch);

});
