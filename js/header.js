(function () {
    // ── Inject header HTML ──────────────────────────────────────────────
    var headerHTML = `
    <header class="header" id="header">
        <a href="index.html">
            <img src="images/MagicEraser_240731_182314.PNG" alt="Logo" class="logo">
        </a>
        <div class="group">
            <nav>
                <ul class="navigation">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <div>
                        <li class="gallery-dropdown">
                            <a href="#" onclick="toggleDropdown(event)">Services</a>
                            <ul class="dropdown-menu">
                                <li><a href="service.html">All Services</a></li>
                                <li><a href="advisory.html">Advisory Services</a></li>
                                <li><a href="development.html">Development Finance</a></li>
                                <li><a href="trade.html">Trade Finance</a></li>
                            </ul>
                        </li>
                    </div>
                    <li><a href="news.html">News</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="search">
                <span class="icon">
                    <ion-icon name="search-outline" class="searchBtn"></ion-icon>
                    <ion-icon name="close-outline" class="closeBtn"></ion-icon>
                </span>
            </div>
            <ion-icon name="menu-outline" class="menuToggle"></ion-icon>
        </div>
        <div class="searchBox">
            <input type="text" id="input-box" placeholder="Search Anything" autocomplete="off">
        </div>
        <div class="result-box"></div>
        <div class="header__line" id="headerLine"></div>
    </header>`;

    // Write into the placeholder div
    var placeholder = document.getElementById('site-header');
    if (placeholder) {
        placeholder.outerHTML = headerHTML;
    }

    // ── Mark active nav link based on current page ──────────────────────
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('nav-active');
        }
        // Mark News as active for article pages too
        if (href === 'news.html' && currentPage.startsWith('news-')) {
            link.classList.add('nav-active');
        }
    });

    // ── Mobile menu / search / close ───────────────────────────────────
    var searchBtn  = document.querySelector('.searchBtn');
    var closeBtn   = document.querySelector('.closeBtn');
    var searchBox  = document.querySelector('.searchBox');
    var menuToggle = document.querySelector('.menuToggle');
    var header     = document.querySelector('header');

    if (searchBtn) {
        searchBtn.onclick = function () {
            searchBox.classList.add('active');
            closeBtn.classList.add('active');
            searchBtn.classList.add('active');
            menuToggle.classList.add('hide');
            header.classList.remove('open');
        };
    }

    if (closeBtn) {
        closeBtn.onclick = function () {
            if (searchBox.classList.contains('active')) {
                searchBox.classList.remove('active');
                closeBtn.classList.remove('active');
                searchBtn.classList.remove('active');
                menuToggle.classList.remove('hide');
            } else {
                header.classList.remove('open');
                closeBtn.classList.remove('active');
                menuToggle.classList.remove('hide');
            }
        };
    }

    if (menuToggle) {
        menuToggle.onclick = function () {
            header.classList.toggle('open');
            closeBtn.classList.toggle('active');
            searchBtn.classList.remove('active');
            menuToggle.classList.toggle('hide');
        };
    }

    // ── Scroll: add .scrolled class to header ──────────────────────────
    window.addEventListener('scroll', function () {
        var h  = document.getElementById('header');
        var hl = document.getElementById('headerLine');
        if (!h || !hl) return;
        if (window.scrollY > 0) {
            h.classList.add('scrolled');
            hl.classList.add('scrolled');
        } else {
            h.classList.remove('scrolled');
            hl.classList.remove('scrolled');
        }
    });

    // ── Services dropdown ──────────────────────────────────────────────
    window.toggleDropdown = function (event) {
        event.preventDefault();
        var dropdownContent = event.target.nextElementSibling;
        dropdownContent.style.display =
            (dropdownContent.style.display === 'block') ? 'none' : 'block';
    };

    window.addEventListener('click', function (event) {
        var dropdowns = document.querySelectorAll('.gallery-dropdown');
        dropdowns.forEach(function (dd) {
            if (!dd.contains(event.target)) {
                dd.querySelector('.dropdown-menu').style.display = 'none';
            }
        });
    });

})();
