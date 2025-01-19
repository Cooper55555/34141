const cards = [
    // Example cards; replace with your actual Pokemon card data
    { name: '1/75', image: 'Custom Pokemon Set/1.png', description: '' },
    { name: '61/75', image: 'Custom Pokemon Set/61.png', description: '' },
    { name: '63/75', image: 'Custom Pokemon Set/63.png', description: '' },
    { name: '64/75', image: 'Custom Pokemon Set/64.png', description: '' },
    { name: '71/75', image: 'Custom Pokemon Set/71.png', description: '' },
    { name: '72/75', image: 'Custom Pokemon Set/72.png', description: '' },
    { name: '73/75', image: 'Custom Pokemon Set/73.png', description: '' },
    { name: '76/75', image: 'Custom Pokemon Set/76.png', description: '' },
    { name: '77/75', image: 'Custom Pokemon Set/77.png', description: '' },
    { name: '78/75', image: 'Custom Pokemon Set/78.png', description: '' },
    { name: '80/75', image: 'Custom Pokemon Set/80.png', description: '' },
    { name: '98/75', image: 'Custom Pokemon Set/98.png', description: '' },
    { name: '99/75', image: 'Custom Pokemon Set/99.png', description: '' },
    { name: '100/75', image: 'Custom Pokemon Set/100.png', description: '' },
    // Add 98 more cards here...
];

// Function to display cards
function displayCards() {
    const cardGrid = document.getElementById('cardGrid');

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" onclick="openModal('${card.image}', '${card.name}')">
            <h2>${card.name}</h2>
            <p>${card.description}</p>
        `;
        cardGrid.appendChild(cardElement);
    });
}

// Function to open modal
function openModal(imageSrc, altText) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = altText;
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Call the function to display cards
displayCards();