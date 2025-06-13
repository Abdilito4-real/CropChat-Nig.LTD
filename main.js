// Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            themeToggle.innerHTML = newTheme === 'dark' ? 
                '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // Mobile Navigation
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            document.body.style.overflow = navLinks.classList.contains('active') ? 
                'hidden' : 'auto';
        });

        // Modal Handling
        const modals = {
            login: document.getElementById('loginModal'),
            signup: document.getElementById('signupModal'),
            farmer: document.getElementById('farmerModal'),
            buyer: document.getElementById('buyerModal')
        };

        const closeButtons = document.querySelectorAll('.close-btn');
        
        // Open modals
        document.querySelectorAll('.desktop-login-btn, .mobile-login-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllModals();
                modals.login.style.display = 'block';
                document.body.style.overflow = 'hidden';
                navLinks.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        document.querySelectorAll('.desktop-signup-btn, .mobile-signup-btn, .switch-to-signup').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllModals();
                modals.signup.style.display = 'block';
                document.body.style.overflow = 'hidden';
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        document.querySelectorAll('.join-farmer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllModals();
                modals.farmer.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        document.querySelectorAll('.join-buyer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllModals();
                modals.buyer.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Switch between login/signup
        document.querySelector('.switch-to-login').addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            modals.login.style.display = 'block';
        });

        // Close modals
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                closeAllModals();
            });
        });

        // Close when clicking outside modal
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeAllModals();
            }
        });

        function closeAllModals() {
            Object.values(modals).forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }

        // Form submissions
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality would be implemented here');
            closeAllModals();
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Signup functionality would be implemented here');
            closeAllModals();
        });

        document.getElementById('farmerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Farmer registration would be implemented here');
            closeAllModals();
        });

        document.getElementById('buyerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Buyer registration would be implemented here');
            closeAllModals();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
                        document.body.style.overflow = 'auto';
                    }
                }
            });
        });
        
        // Animate elements when they come into view
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.slide-up');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Initial check
        animateOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);