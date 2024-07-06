        
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll("nav ul li a");
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    function searchPG() {
        var input = document.getElementById("search-input").value;
        alert("Search for: " + input);
    }

    document.querySelector('.search-container button').addEventListener('click', searchPG);
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
