function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}
const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
  const pos = aboutSection.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if(pos < screen - 100){
    aboutSection.style.opacity = "1";
    aboutSection.style.transform = "translateY(0)";
  }
});
document.querySelectorAll(".dropdown > a").forEach(menu => {
  menu.addEventListener("click", function(e){
    if(window.innerWidth < 768){
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });
});


// Load Navbar
// Load Navbar
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

// Load Footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });




// initial state
aboutSection.style.opacity = "0";
aboutSection.style.transform = "translateY(50px)";
aboutSection.style.transition = "0.8s ease";

document.getElementById("whatsappForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let country = document.getElementById("country").value;
  let visa = document.getElementById("visa").value;
  let message = document.getElementById("message").value;

  let text = `Fly Maverick Enquiry:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Country: ${country}%0A
Visa Type: ${visa}%0A
Message: ${message}`;

  let whatsappURL = `https://wa.me/919626877940?text=${text}`;
  window.open(whatsappURL, "_blank");
});

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
function toggleChat(){
  const box = document.getElementById("chatbox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

/* Send Message */
function sendMessage(){
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBody");
  const msg = input.value.toLowerCase();

  if(!msg) return;

  // user message
  chat.innerHTML += `<div class="user-msg">${input.value}</div>`;

  // bot reply
  let reply = "Thanks for contacting Fly Maverick! Our team will assist you shortly.";

  if(msg.includes("visa")){
    reply = "Fly Maverick provides Tourist, Visit, Work, and Student visa assistance worldwide.";
  }
  else if(msg.includes("country") || msg.includes("where")){
    reply = "We offer visa and travel services for Australia, Canada, UK, Europe, Japan, and more.";
  }
  else if(msg.includes("contact") || msg.includes("phone")){
    reply = "You can contact us at +91 9626877940 or via WhatsApp anytime.";
  }
  else if(msg.includes("price") || msg.includes("cost")){
    reply = "Visa costs depend on country and type. Please contact us for exact pricing.";
  }
  else if(msg.includes("fly maverick")){
    reply = "Fly Maverick is your trusted partner for international travel and visa solutions.";
  }

  setTimeout(()=>{
    chat.innerHTML += `<div class="bot-msg">${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}