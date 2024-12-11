var myCarousel = document.querySelector('#carouselExampleAutoplaying')
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000, // Change the interval as needed
            wrap: true
        })





// Sample gallery data
const galleryData = [
    { type: "building", src: "./building.png" },
    { type: "interior", src: "./int.jpeg" },
    { type: "building", src: "./building2.png" },
    { type: "office", src: "./office.jpeg" },
    { type: "interior", src: "./int.jpeg" },
    { type: "building", src: "./building.png" },
    { type: "office", src: "./office.jpeg" },
    { type: "building", src: "./building2.png" },
    
 
];

// Get DOM elements
const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

// Function to render gallery images
function renderGallery(filter) {
    gallery.innerHTML = ""; // Clear current gallery

    // Filter gallery items based on the filter type
    const filteredImages = filter === "all" ? galleryData : galleryData.filter(item => item.type === filter);

    // Add filtered images to the gallery
    filteredImages.forEach(item => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item", "relative", "rounded-lg", "shadow-lg", "overflow-hidden");

        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.type}" class="rounded-lg">
            <div class="overlay flex flex-col justify-center items-center text-white">
                <h3 class="text-lg font-bold mb-2">${item.type}</h3>
                
            </div>
        `;
        gallery.appendChild(galleryItem);
    });
}

// Add event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        renderGallery(filter);
    });
});

// Initial render with "all" filter
renderGallery("all");
