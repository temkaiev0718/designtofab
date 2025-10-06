class SelectedPartners {
  constructor() {
    this.init();
  }

  init() {
    const accordionItems = document.querySelectorAll('.custom-accordion__item');
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.custom-accordion__header');
      
      header.addEventListener('click', () => {
        console.log("event start");
        const isActive = item.classList.contains('active');
        
        // Close all accordion items
        // accordionItems.forEach(otherItem => {
        //   otherItem.classList.remove('active');
        // });
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  }
}

// Initialize the section when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SelectedPartners();
});