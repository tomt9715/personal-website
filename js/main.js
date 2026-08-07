(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            contactForm.hidden = true;
            formStatus.textContent = "Thanks for reaching out. I'll get back to you soon.";
            formStatus.hidden = false;
          } else {
            return response.json().then(function (data) {
              var errorMessage =
                data && data.errors
                  ? data.errors.map(function (error) { return error.message; }).join(", ")
                  : "Something went wrong. Please try again or reach out directly.";
              formStatus.textContent = errorMessage;
              formStatus.hidden = false;
            });
          }
        })
        .catch(function () {
          formStatus.textContent = "Something went wrong. Please try again or reach out directly.";
          formStatus.hidden = false;
        });
    });
  }
})();
