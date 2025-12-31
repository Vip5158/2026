'use client';

// Performance Optimizations
let isPageLoaded = false;

// Gallery Images Data
const galleryImages = [
    {
        id: 1,
        title: "Happy New Year 2026! ✨",
        description: "Naya saal nayi umeed lekar aaye, Har din khushiyon se roshan ho jaaye",
        url: "boliviainteligente-1AgT_-D6SiU-unsplash.jpg"
    },
    {
        id: 2,
        title: "Happy New Year 2026! 😄",
        description: "Purane ghamon ko peeche chhod do,Naya saal muskurahat se jod lo",
        url: "boliviainteligente-2PdUd-d6bvM-unsplash.jpg"
    },
    {
        id: 3,
        title: "Happy New Year 2026! 🌟",
        description: "Sapne bade ho, hausle strong ho,Naya saal aapke liye best ho",
        url: "boliviainteligente-7_p-1fiLE_4-unsplash.jpg"
    },
    {
        id: 4,
        title: "Happy New Year 2026! 🎆",
        description: "Har subah nayi shuruaat laaye,Naya saal aapko khushiyon se bhar jaaye",
        url: "boliviainteligente-9n6meGmnszA-unsplash.jpg"
    },
    {
        id: 5,
        title: "Happy New Year 2026! 💫",
        description: "Dosti, pyaar aur success saath rahein,Naya saal 2026 kamaal rahein 🎉",
        url: "boliviainteligente-PK_PwDNrQNk-unsplash.jpg"
    },
    {
        id: 6,
        title: "Happy New Year 2026! 🎉",
        description: "Naya saal khushiyon ki saugaat laaye,Aapki zindagi har pal muskuraye 🌸",
        url: "boliviainteligente-MdC1yGXBgws-unsplash.jpg"
    }
];

let currentImageIndex = 0;
let selectedCardIndex = -1;
let galleryInterval = null;

// Create Starry Background
function createStarBackground() {
    const starsBg = document.getElementById('starsBg');
    
    // Clear existing stars
    starsBg.innerHTML = '';
    
    // Create 3 layers of stars
    const layers = [
        { count: 150, className: 'layer-1' },
        { count: 100, className: 'layer-2' },
        { count: 50, className: 'layer-3' }
    ];
    
    layers.forEach(layer => {
        const starLayer = document.createElement('div');
        starLayer.className = `star-layer ${layer.className}`;
        
        for (let i = 0; i < layer.count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay
            star.style.animationDelay = `${Math.random() * 10}s`;
            
            // Add to layer
            starLayer.appendChild(star);
        }
        
        // Add shooting stars
        if (layer.className === 'layer-3') {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const shootingStar = document.createElement('div');
                    shootingStar.className = 'shooting-star';
                    
                    // Random position
                    shootingStar.style.left = `${Math.random() * 100}%`;
                    shootingStar.style.top = `${Math.random() * 100}%`;
                    
                    // Random animation delay
                    shootingStar.style.animationDelay = `${Math.random() * 15}s`;
                    
                    starLayer.appendChild(shootingStar);
                }, i * 2000);
            }
        }
        
        starsBg.appendChild(starLayer);
    });
}

// Create Confetti Background
function createConfettiBackground() {
    const confettiBg = document.getElementById('confettiBg');
    
    // Clear existing confetti
    confettiBg.innerHTML = '';
    
    const confettiColors = [
        '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
        '#ff4500', '#ff1493', '#1e90ff', '#32cd32', '#ffd700', '#8a2be2'
    ];
    
    // Create 100 pieces of confetti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random position
        confetti.style.left = `${Math.random() * 100}%`;
        
        // Random color
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.setProperty('--confetti-color', color);
        
        // Random animation delay
        const delay = Math.random() * 5;
        confetti.style.animationDelay = `${delay}s`;
        
        // Random duration
        const duration = Math.random() * 3 + 2;
        confetti.style.setProperty('--duration-slow', `${duration}s`);
        confetti.style.setProperty('--duration-fast', `${duration - 1}s`);
        
        // Random size
        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random rotation
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiBg.appendChild(confetti);
    }
}

// Create Fireworks Background
function createFireworksBackground() {
    const fireworksBg = document.getElementById('fireworksBg');
    
    // Clear existing fireworks
    fireworksBg.innerHTML = '';
    
    const fireworkColors = [
        '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff', '#ffa500',
        '#ff1493', '#1e90ff', '#32cd32', '#ff4500', '#ffd700', '#8b0000'
    ];
    
    // Create 8 fireworks
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirework(fireworksBg, fireworkColors);
        }, i * 1500);
    }
}

// Create a single firework
function createFirework(container, colors) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    // Random position
    const left = Math.random() * 80 + 10;
    firework.style.left = `${left}%`;
    
    // Random explode height
    const explodeHeight = Math.random() * 40 + 30;
    firework.style.setProperty('--explode-height', `${explodeHeight}vh`);
    
    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.setProperty('--firework-color', color);
    
    // Random delay
    const delay = Math.random() * 2;
    firework.style.animationDelay = `${delay}s`;
    
    container.appendChild(firework);
    
    // Create particles after firework reaches explode height
    setTimeout(() => {
        createFireworkParticles(container, left, explodeHeight, color);
        // Remove firework after explosion
        setTimeout(() => {
            if (firework.parentNode) {
                firework.remove();
            }
        }, 1000);
    }, 800);
}

// Create firework particles
function createFireworkParticles(container, left, explodeHeight, color) {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        
        // Position at explosion point
        particle.style.left = `${left}%`;
        particle.style.top = `${explodeHeight}%`;
        
        // Random particle direction and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 50 + 20;
        const particleX = Math.cos(angle) * distance;
        const particleY = Math.sin(angle) * distance;
        
        particle.style.setProperty('--particle-x', `${particleX}px`);
        particle.style.setProperty('--particle-y', `${particleY}px`);
        
        // Color
        particle.style.setProperty('--particle-color', color);
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1500);
    }
}

// Create continuous fireworks
function startFireworksShow() {
    createFireworksBackground();
    // Create new fireworks every 2 seconds
    setInterval(() => {
        createFireworksBackground();
    }, 8000);
}

// Hide loading screen when page is ready
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            isPageLoaded = true;
            initGreetingCard();
            initHeadingSection(); // Initialize heading section
        }, 500);
    }
}

// ============================================
// ADDED: Initialize Heading Section with Effects
// ============================================
function initHeadingSection() {
    const newYearSection = document.getElementById('newYearCelebration');
    
    // Create confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.classList.add('decoration');
        
        // Random position
        const left = Math.random() * 100;
        confetti.style.left = `${left}%`;
        
        // Random color
        const colors = ['#ff0066', '#ffcc00', '#00ccff', '#00ff99', '#ffffff'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random animation
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;
        confetti.style.animation = `confetti-fall ${duration}s linear ${delay}s infinite`;
        
        newYearSection.appendChild(confetti);
    }
    
    // Create twinkling stars
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.classList.add('decoration');
        star.innerHTML = '<i class="fas fa-star"></i>';
        
        // Random position
        const left = Math.random() * 90 + 5;
        const top = Math.random() * 80 + 10;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;
        
        // Random animation delay
        const delay = Math.random() * 3;
        star.style.animationDelay = `${delay}s`;
        
        // Random size
        const size = Math.random() * 0.8 + 0.7;
        star.style.fontSize = `${size}rem`;
        
        newYearSection.appendChild(star);
    }
    
    // Add hover effect to the section
    newYearSection.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    newYearSection.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    // Add click effect - change year color temporarily
    newYearSection.addEventListener('click', function() {
        const yearElement = document.querySelector('.year-2026');
        const originalClass = yearElement.className;
        
        // Add sparkle effect
        yearElement.classList.add('year-glow');
        yearElement.style.animation = 'none';
        
        setTimeout(() => {
            yearElement.style.animation = 'year-pulse 2s infinite alternate';
        }, 10);
        
        // Create burst effect
        for (let i = 0; i < 20; i++) {
            createBurstParticle(this);
        }
    });
    
    // Function to create burst particles on click
    function createBurstParticle(section) {
        const particle = document.createElement('div');
        particle.classList.add('confetti');
        
        // Position at center of section
        const rect = section.getBoundingClientRect();
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.position = 'absolute';
        particle.style.transform = 'translate(-50%, -50%)';
        
        // Random color
        const colors = ['#ff0066', '#ffcc00', '#00ccff', '#00ff99'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        section.appendChild(particle);
        
        // Animate particle
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = 0;
        let posY = 0;
        let opacity = 1;
        
        const animate = setInterval(() => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${posX}px, ${posY}px)`;
            particle.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(animate);
                section.removeChild(particle);
            }
        }, 16);
    }
}

// Initialize Image Gallery
function initImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageDesc = document.getElementById('imageDesc');
    
    // Preload images
    function preloadImage(url) {
        const img = new Image();
        img.src = url;
    }
    
    galleryImages.forEach(image => {
        preloadImage(image.url);
    });
    
    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            changeImage(index);
            if (galleryInterval) {
                clearInterval(galleryInterval);
                galleryInterval = setInterval(() => {
                    changeImage(currentImageIndex + 1);
                }, 5000);
            }
        });
    });
    
    // Navigation buttons
    document.querySelector('.prev-btn').addEventListener('click', () => {
        changeImage(currentImageIndex - 1);
        if (galleryInterval) {
            clearInterval(galleryInterval);
            galleryInterval = setInterval(() => {
                changeImage(currentImageIndex + 1);
            }, 5000);
        }
    });
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        changeImage(currentImageIndex + 1);
        if (galleryInterval) {
            clearInterval(galleryInterval);
            galleryInterval = setInterval(() => {
                changeImage(currentImageIndex + 1);
            }, 5000);
        }
    });
    
    // Set initial image
    changeImage(0);
    
    // Auto-change image every 5 seconds
    galleryInterval = setInterval(() => {
        changeImage(currentImageIndex + 1);
    }, 5000);
}

// Initialize Image Cards
function initImageCards() {
    const imageCards = document.querySelectorAll('.image-card');
    
    imageCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            selectCard(index);
        });
    });
}

// Change image in gallery
function changeImage(index) {
    const mainImage = document.getElementById('mainImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageDesc = document.getElementById('imageDesc');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (index >= galleryImages.length) index = 0;
    if (index < 0) index = galleryImages.length - 1;
    
    currentImageIndex = index;
    const imageData = galleryImages[index];
    
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = imageData.url;
        mainImage.alt = imageData.title;
        imageTitle.textContent = imageData.title;
        imageDesc.textContent = imageData.description;
        mainImage.style.opacity = '1';
    }, 300);
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.remove('active');
        if (i === index) {
            thumb.classList.add('active');
        }
    });
}

// Select image card
function selectCard(index) {
    const cards = document.querySelectorAll('.image-card');
    
    cards.forEach(card => {
        card.classList.remove('selected');
    });
    
    if (selectedCardIndex === index) {
        selectedCardIndex = -1;
    } else {
        selectedCardIndex = index;
        cards[index].classList.add('selected');
        const name = cards[index].querySelector('.name').textContent;
        const subtitle = cards[index].querySelector('.image-subtitle') ? cards[index].querySelector('.image-subtitle').textContent : '';
        showToast(`Selected: ${name}${subtitle ? ' - ' + subtitle : ''}`, 'info');
    }
}

// Show toast message
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-check-circle';
    if (type === 'error') icon = 'fas fa-exclamation-circle';
    if (type === 'warning') icon = 'fas fa-exclamation-triangle';
    
    toast.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// GREETING CARD FUNCTIONALITY WITH AUTO-CAPITALIZATION
function initGreetingCard() {
    const userNameInput = document.getElementById('userName');
    const generateBtn = document.getElementById('generateCardBtn');
    const greetingCardContainer = document.getElementById('greetingCardContainer');
    const displayUserName = document.getElementById('displayUserName');
    const userNameInline = document.getElementById('userNameInline');
    const shareBtn = document.getElementById('shareCardBtn');
    const downloadBtn = document.getElementById('downloadCardBtn');
    const newCardBtn = document.getElementById('newCardBtn');
    const greetingCard = document.getElementById('greetingCard');
    
    // Function to capitalize the first letter of each word
    function capitalizeName(name) {
        return name
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    // Auto-capitalize first letter as user types
    userNameInput.addEventListener('input', function(e) {
        const cursorPosition = this.selectionStart;
        const originalValue = this.value;
        
        // Capitalize first letter of each word
        this.value = capitalizeName(originalValue);
        
        // Restore cursor position
        this.setSelectionRange(cursorPosition, cursorPosition);
    });
    
    // Auto-capitalize on blur (when user leaves the field)
    userNameInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            this.value = capitalizeName(this.value);
        }
    });
    
    // Generate greeting card
    generateBtn.addEventListener('click', () => {
        // Auto-capitalize before processing
        userNameInput.value = capitalizeName(userNameInput.value.trim());
        const userName = userNameInput.value.trim();
        
        if (!userName) {
            showToast('Please enter your name to create a greeting card!', 'warning');
            userNameInput.focus();
            userNameInput.style.borderColor = '#ff4500';
            userNameInput.style.boxShadow = '0 0 10px rgba(255, 69, 0, 0.5)';
            setTimeout(() => {
                userNameInput.style.borderColor = '#ffd700';
                userNameInput.style.boxShadow = 'none';
            }, 2000);
            return;
        }
        
        // Update names in card
        displayUserName.textContent = userName;
        userNameInline.textContent = userName;
        
        // Show card with animation
        greetingCardContainer.style.display = 'block';
        
        // Scroll to card smoothly
        setTimeout(() => {
            greetingCardContainer.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 100);
        
        // Add celebration effect
        createCelebrationEffect();
        
        showToast(`Greeting card created for ${userName}!`, 'success');
    });
    
    // SHARE CARD FUNCTIONALITY
    shareBtn.addEventListener('click', async () => {
        const userName = displayUserName.textContent;
        
        // Create share text
        const shareText = `🎉 Happy New Year 2026! 🎉\n\nCheck out my personalized New Year greeting card!\n\nMade for: ${userName}\n\nMay 2026 bring you joy, success, and happiness!\n\n#HappyNewYear2026 #NewYearGreetings #2026`;
        
        try {
            // Try Web Share API first (for mobile)
            if (navigator.share) {
                await navigator.share({
                    title: `Happy New Year 2026 - ${userName}`,
                    text: shareText,
                    url: window.location.href
                });
                showToast('Greeting card shared successfully!', 'success');
            } 
            // Try clipboard API
            else if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(shareText + '\n\n' + window.location.href);
                showToast('Greeting card link copied to clipboard!', 'success');
            }
            // Fallback to prompt
            else {
                const shareUrl = window.location.href;
                const fullShareText = `${shareText}\n\nShare this link: ${shareUrl}`;
                
                // Create temporary textarea for copy
                const textarea = document.createElement('textarea');
                textarea.value = fullShareText;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                
                showToast('Greeting card text copied! Share it with friends.', 'success');
            }
        } catch (error) {
            console.error('Sharing failed:', error);
            showToast('Sharing failed. Try copying the link manually.', 'error');
        }
    });
    
    // DOWNLOAD CARD AS IMAGE
    downloadBtn.addEventListener('click', () => {
        showToast('Generating your greeting card image...', 'info');
        
        // Hide action buttons temporarily for clean screenshot
        const cardActions = greetingCard.querySelector('.card-actions');
        const originalDisplay = cardActions.style.display;
        cardActions.style.display = 'none';
        
        // Use html2canvas to capture the card
        html2canvas(greetingCard, {
            backgroundColor: null,
            scale: 2, // Higher quality
            useCORS: true,
            logging: false,
            allowTaint: true
        }).then(canvas => {
            // Restore action buttons
            cardActions.style.display = originalDisplay;
            
            // Convert canvas to image
            const image = canvas.toDataURL('image/png', 1.0);
            
            // Create download link
            const link = document.createElement('a');
            link.download = `Happy-New-Year-2026-${displayUserName.textContent}.png`;
            link.href = image;
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showToast('Greeting card downloaded successfully!', 'success');
        }).catch(error => {
            // Restore action buttons
            cardActions.style.display = originalDisplay;
            console.error('Download failed:', error);
            showToast('Failed to download. Try taking a screenshot instead.', 'error');
        });
    });
    
    // Create new card
    newCardBtn.addEventListener('click', () => {
        userNameInput.value = '';
        greetingCardContainer.style.display = 'none';
        userNameInput.focus();
        showToast('Ready to create a new greeting card!', 'info');
    });
    
    // Enter key support
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            // Auto-capitalize before generating
            userNameInput.value = capitalizeName(userNameInput.value.trim());
            generateBtn.click();
        }
    });
    
    // Random celebration messages
    const messages = [
        "Wishing you a year filled with laughter, love, and success!",
        "May 2026 be your best year yet!",
        "Here's to new beginnings and amazing adventures!",
        "May all your dreams and aspirations come true in 2026!",
        "Wishing you prosperity, health, and happiness in the new year!"
    ];
}

// Create celebration effect
function createCelebrationEffect() {
    // Create temporary celebration elements
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['🎉', '🎊', '✨', '🥳', '🎆'][Math.floor(Math.random() * 5)];
            confetti.style.position = 'fixed';
            confetti.style.fontSize = `${Math.random() * 20 + 20}px`;
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = '-50px';
            confetti.style.zIndex = '999';
            confetti.style.pointerEvents = 'none';
            confetti.style.opacity = '0';
            
            // Add animation
            confetti.style.animation = `confettiFall ${Math.random() * 2 + 1.5}s ease-out forwards`;
            
            document.body.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 3500);
        }, i * 100);
    }
    
    // Add confetti animation to style if not already present
    if (!document.querySelector('#confetti-animation')) {
        const style = document.createElement('style');
        style.id = 'confetti-animation';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg) scale(0.5);
                    opacity: 0;
                }
                10% {
                    transform: translateY(50px) rotate(180deg) scale(1);
                    opacity: 1;
                }
                90% {
                    transform: translateY(calc(100vh - 100px)) rotate(720deg) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(900deg) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Keyboard navigation for image gallery
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeImage(currentImageIndex - 1);
    } else if (e.key === 'ArrowRight') {
        changeImage(currentImageIndex + 1);
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Create background effects
    createStarBackground();
    createConfettiBackground();
    startFireworksShow();
    
    // Initialize gallery and cards
    initImageGallery();
    initImageCards();
    
    // Hide loading screen
    setTimeout(hideLoadingScreen, 800);
    
    // Performance optimization
    window.addEventListener('beforeunload', () => {
        if (galleryInterval) clearInterval(galleryInterval);
    });
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (galleryInterval) clearInterval(galleryInterval);
        } else {
            galleryInterval = setInterval(() => {
                changeImage(currentImageIndex + 1);
            }, 5000);
        }
    });
});

// Lazy load
window.addEventListener('load', () => {
    if (!isPageLoaded) {
        hideLoadingScreen();
    }
});