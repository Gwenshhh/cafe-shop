document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active style marker from previous button
            document.querySelector(".filter-btn.active").classList.remove("active");
            button.classList.add("active");

            // Extract the selected filter parameter
            const targetCategory = button.getAttribute("data-category");

            // Filter items instantly
            menuItems.forEach(item => {
                const itemType = item.getAttribute("data-item-type");

                if (targetCategory === "all" || itemType === targetCategory) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });
});