function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var interests = document.getElementById("interests");
    var contact = document.getElementById("contact");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var interestsBtn = document.getElementById("interestsBtn");
    var contactBtn = document.getElementById("contactBtn");

    member.style.display = "block";
    skills.style.display = "none";
    interests.style.display = "none";
    contact.style.display = "none";
    memberBtn.style.backgroundColor = "#F0F0F0";
    skillsBtn.style.backgroundColor = "#FFFFFF";
    interestsBtn.style.backgroundColor = "#FFFFFF";
    contactBtn.style.backgroundColor = "#FFFFFF";
}