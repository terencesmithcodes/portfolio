const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

function SendMail() {
  const params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_vjx6ux8", "template_8dz8dxk", params)
    .then(function (res) {
      alert("Successfully Sent! " + res.status);
    });
}
