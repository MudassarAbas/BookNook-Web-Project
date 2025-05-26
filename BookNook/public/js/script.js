searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
addToCart({
    id: 'test1',
    title: 'Test Book',
    price: 19.99,
    image: 'image/book-1.png'
})
console.log(JSON.parse(localStorage.getItem('cart')))


function addToFavorites(book) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if already added
    const alreadyExists = favorites.some(fav => fav.id === book.id);
    if (!alreadyExists) {
        favorites.push(book);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${book.title} added to favorites!`);
    } else {
        alert(`${book.title} is already in favorites.`);
    }
}

// Show favorites when navbar heart icon is clicked
document.addEventListener('DOMContentLoaded', () => {
    const navbarHeart = document.querySelector('.header-1 .fa-heart');
    if (navbarHeart) {
        navbarHeart.addEventListener('click', function(e) {
            e.preventDefault();
            showFavorites();
        });
    }
});

function showFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    let modalHTML = `
        <div id="favoritesModal" class="modal">
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>Your Favorite Books</h2>
                ${favorites.length === 0 ? "<p>No favorites yet.</p>" : ""}
                <ul class="favorites-list">
                    ${favorites.map(book => `
                        <li>
                            <img src="${book.image}" width="50">
                            <span>${book.title}</span> - $${book.price.toFixed(2)}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    // Remove old modal if exists
    const oldModal = document.getElementById('favoritesModal');
    if (oldModal) oldModal.remove();

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Open modal
    const modal = document.getElementById('favoritesModal');
    modal.style.display = 'block';

    document.querySelector('.close-btn').onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}
