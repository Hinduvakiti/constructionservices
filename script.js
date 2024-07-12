function toggleProfile(profileId) {
    var profile = document.getElementById(profileId);
    if (profile.style.display === "block") {
        profile.style.display = "none";
    } else {
        profile.style.display = "block";
    }
}

function toggleProfile(profileId) {
    var profileContainer = document.getElementById(profileId + '-container');
    if (profileContainer.style.display === "none" || profileContainer.style.display === "") {
        profileContainer.style.display = "block";
    } else {
        profileContainer.style.display = "none";
    }
}

function showContact() {
    hideAllSections();
    document.getElementById('contact').style.display = 'flex';
}

function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
}

