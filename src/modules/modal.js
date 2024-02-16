const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    
    const fadeInModal = () => {
        modal.style.opacity = '0'; 
        modal.style.display = 'block'; 
        
        
        let opacity = 0;
        const animation = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(animation); 
            }
            modal.style.opacity = opacity.toString();
            opacity += 0.1; 
        }, 50); 
    };
    
    buttons.forEach(btn => {
        btn.addEventListener('click', fadeInModal);
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

   
    if (window.innerWidth < 768) {
        buttons.forEach(btn => {
            btn.removeEventListener('click', fadeInModal); 
        });
    }
};

export default modal;
