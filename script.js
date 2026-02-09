const cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const sidebarList = document.getElementById("sidebar-cart-list");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  sidebarList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.price} ₽`;
    sidebarList.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkout-button")
    .addEventListener("click", () => {
      const total = cart.reduce((s, i) => s + i.price, 0);
      document.querySelector("#payment-form button")
              .textContent = `Оплатить ${total} руб.`;
      openPaymentModal();
    });
});

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
  slideIndex = index;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlide(n);
  slideInterval = setInterval(nextSlide, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
  slideInterval = setInterval(nextSlide, 5000);
});

function pay() {
  alert("Товар успешно оплачен!");
}

// document.getElementById('login-form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert("Вы успешно вошли!");
// });

document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Спасибо за ваш отзыв!");
});


function toggleCartSidebar() {
  document.getElementById("cart-sidebar").classList.toggle("open");
  document.getElementById("cart-overlay").classList.toggle("active");
}

function closeCartSidebar() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("active");
}

function showRole(role) {
  const roles = ['client', 'guest', 'admin'];

  const title = document.getElementById('role-selection-title');
  title.classList.remove('client', 'guest', 'admin');
  title.classList.add(role);

  roles.forEach(r => {
    const section = document.getElementById(`role-${r}`);
    if (section) section.style.display = (r === role ? 'block' : 'none');
  });
  document.querySelector('.role-buttons').style.display = 'none';

}

function backToRoleSelection() {
  document.querySelectorAll('.role-section').forEach(el => el.style.display = 'none');
  document.querySelector('.role-buttons').style.display = 'block';

  const title = document.getElementById('role-selection-title');
  title.classList.remove('client', 'guest', 'admin');
}

function openLoginModal() {
  document.getElementById('login-modal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('login-modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('login-modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// document.getElementById('login-form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert("Вы успешно вошли!");
//   closeLoginModal();
// });

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

document.getElementById('payment-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Товар успешно оплачен!");
  closePaymentModal();
});

window.addEventListener('click', function(event) {
  const modal = document.getElementById('payment-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function closeLoginModal() {
  document.getElementById('login-modal').style.display = 'none';
}

function openPaymentModal() {
  document.getElementById('payment-modal').style.display = 'block';
}

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('login-modal')) {
    closeLoginModal();
  }
  if (event.target === document.getElementById('payment-modal')) {
    closePaymentModal();
  }
});

function openFeedbackModal() {
  document.getElementById('feedback-modal').style.display = 'block';
}

function closeFeedbackModal() {
  document.getElementById('feedback-modal').style.display = 'none';
}

document.getElementById('feedback-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Спасибо за ваш отзыв!");
  closeFeedbackModal();
});

window.onclick = function(event) {
  if (event.target === document.getElementById('feedback-modal')) {
    closeFeedbackModal();
  }
};

function openDeliveryModal() {
  document.getElementById('delivery-modal').style.display = 'block';
}

function closeDeliveryModal() {
  document.getElementById('delivery-modal').style.display = 'none';
}

window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('delivery-modal')) {
    closeDeliveryModal();
  }
});

function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

function switchToRegister() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

function switchToLogin() {
  document.getElementById('register-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
}

window.addEventListener('click', function(event) {
  const modal = document.getElementById('auth-modal');
  if (event.target === modal) {
    closeAuthModal();
  }
});

function switchToRegister() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

function switchToLogin() {
  document.getElementById('register-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
}

function closePaymentModal() {
  document.getElementById('payment-modal').style.display = 'none';
}

function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  const login = document.getElementById('login-section');
  const register = document.getElementById('register-section');

  modal.style.display = 'block';

  if (mode === 'register') {
    login.style.display = 'none';
    register.style.display = 'block';
    modal.querySelector('.modal-content').classList.add('wide');
  } else {
    login.style.display = 'block';
    register.style.display = 'none';
    modal.querySelector('.modal-content').classList.remove('wide');
  }
}

function closeLoginModal() {
  document.getElementById('login-modal').style.display = 'none';
}

function openPrivacyModal() {
  document.getElementById("privacy-modal").style.display = "block";
}

function closePrivacyModal() {
  document.getElementById("privacy-modal").style.display = "none";
}

window.addEventListener("click", function(event) {
  const modal = document.getElementById("privacy-modal");
  if (event.target === modal) {
    closePrivacyModal();
  }
});

function openTermsModal() {
  document.getElementById("terms-modal").style.display = "block";
}
function closeTermsModal() {
  document.getElementById("terms-modal").style.display = "none";
}

function openOfferModal() {
  document.getElementById("offer-modal").style.display = "block";
}
function closeOfferModal() {
  document.getElementById("offer-modal").style.display = "none";
}

function openReturnModal() {
  document.getElementById("return-modal").style.display = "block";
}
function closeReturnModal() {
  document.getElementById("return-modal").style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("terms-modal")) closeTermsModal();
  if (event.target === document.getElementById("offer-modal")) closeOfferModal();
  if (event.target === document.getElementById("return-modal")) closeReturnModal();
});

function openAboutModal() {
  document.getElementById('about-modal').style.display = 'block';
}

function closeAboutModal() {
  document.getElementById('about-modal').style.display = 'none';
}

window.addEventListener('click', function (event) {
  const modal = document.getElementById('about-modal');
  if (event.target === modal) {
    closeAboutModal();
  }
});

function openContactsModal() {
  document.getElementById('contacts-modal').style.display = 'block';
}

function closeContactsModal() {
  document.getElementById('contacts-modal').style.display = 'none';
}

function openReviews() {
  document.getElementById('reviews-modal').style.display = 'block';
}

function closeReviewsModal() {
  document.getElementById('reviews-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[class^="category-toggle"]').forEach(cat => {
    cat.addEventListener('click', () => {
      const sublist = cat.nextElementSibling;
      if (sublist) sublist.style.display = sublist.style.display === 'block' ? 'none' : 'block';
    });
  });
  document.querySelectorAll('[class^="subcategory-toggle"]').forEach(sub => {
    sub.addEventListener('click', () => {
      const products = sub.nextElementSibling;
      if (products) products.classList.toggle('open');
    });
  });
});

