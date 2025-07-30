document.addEventListener('DOMContentLoaded', () => {
  // Mall data structure
  const mallData = {
    floors: [
      {
        id: 1,
        name: 'Ground Floor',
        stores: [
          { id: 'a0', name: 'Elevator', type: 'elevator', description: 'Use the elevator to move between floors.', actions: ['use-elevator'] },
          { id: 'a1', name: 'Starbucks', type: 'food-court', description: 'Get your caffeine fix at this popular coffee chain.', actions: ['buy-coffee', 'rest', 'use-wifi'] },
          { id: 'a2', name: 'Baskin Robbins', type: 'food-court', description: 'Ice cream shop offering a wide variety of flavors and frozen treats.', actions: ['eat-food', 'order-dessert'] },
          { id: 'a3', name: 'Food Court', type: 'food-court', description: 'A variety of food options to satisfy your hunger.', actions: ['eat-food', 'rest'] },
          { id: 'a4', name: 'Zara', type: 'clothing', description: 'Trendy fashion retailer offering the latest styles.', actions: ['shop-clothes', 'try-on'] },
          { id: 'a5', name: 'H&M', type: 'clothing', description: 'Fashion and quality at the best price in a sustainable way.', actions: ['shop-clothes', 'try-on'] },
          { id: 'a6', name: 'Uniqlo', type: 'clothing', description: 'Japanese casual wear designer, manufacturer and retailer.', actions: ['shop-clothes', 'try-on'] },
          { id: 'a7', name: 'Nike', type: 'clothing', description: 'Athletic shoes, apparel and sports equipment.', actions: ['shop-clothes', 'try-on'] },
          { id: 'a8', name: 'Adidas', type: 'clothing', description: 'Sports clothing, shoes, and accessories.', actions: ['shop-clothes', 'try-on'] },
          { id: 'a9', name: 'McDonald\'s', type: 'food-court', description: 'Fast food restaurant serving burgers and fries.', actions: ['eat-food', 'rest'] },
          { id: 'a10', name: 'Lululemon', type: 'clothing', description: 'Technical athletic apparel for yoga, running, and training.', actions: ['shop-clothes', 'try-on'] },
          { id: 'a11', name: 'Information Desk', type: 'service', description: 'Get information and assistance about the mall.', actions: ['get-info', 'get-map'] },
          { id: 'a12', name: 'Digital Kiosk', type: 'service', description: 'Interactive touchscreen kiosk with mall information, store directory, and event calendar.', actions: ['use-directory', 'check-events', 'take-virtual-tour'] },
          { id: 'a13', name: 'ATMs', type: 'service', description: 'Withdraw cash or check your balance.', actions: ['withdraw-cash', 'check-balance'] },
          { id: 'a14', name: 'Restrooms', type: 'service', description: 'Public restrooms.', actions: ['use-restroom'] },
          { id: 'a15', name: 'Target', type: 'department-store', description: 'Retail store offering a wide range of products.', actions: ['shop-general', 'shop-clothes', 'shop-electronics'] },
          { id: 'a16', name: 'Entrance A', type: 'entrance', description: 'Main entrance to the mall.', actions: ['enter-exit'] },
          { id: 'a17', name: 'Entrance B', type: 'entrance', description: 'Secondary entrance to the mall.', actions: ['enter-exit'] },
        ]
      },
      {
        id: 2,
        name: 'First Floor',
        stores: [
          { id: 'b0', name: 'Elevator', type: 'elevator', description: 'Use the elevator to move between floors.', actions: ['use-elevator'] },
          { id: 'b1', name: 'Apple Store', type: 'electronics', description: 'Retail store specialized in Apple products.', actions: ['shop-electronics', 'tech-support'] },
          { id: 'b2', name: 'Samsung', type: 'electronics', description: 'Experience the latest Samsung gadgets and home appliances.', actions: ['shop-electronics', 'tech-support'] },
          { id: 'b3', name: 'GameStop', type: 'electronics', description: 'Video games, consoles, and gaming accessories.', actions: ['shop-electronics', 'play-demo'] },
          { id: 'b4', name: 'Best Buy', type: 'electronics', description: 'Consumer electronics retailer.', actions: ['shop-electronics', 'tech-support'] },
          { id: 'b5', name: 'Pop Mart', type: 'specialty', description: 'Trendy collectible toy store featuring blind box figures, designer toys, and pop culture merchandise.', actions: ['shop-toys', 'shop-merchandise', 'view-displays'] },
          { id: 'b6', name: 'Aritzia', type: 'clothing', description: 'Women\'s fashion brand known for its high-quality fabrics and on-trend designs.', actions: ['shop-clothes', 'try-on'] },
          { id: 'b7', name: 'Nordstrom', type: 'department-store', description: 'Upscale department store chain.', actions: ['shop-clothes', 'shop-general'] },
          { id: 'b8', name: 'Sephora', type: 'beauty', description: 'Beauty retailer offering cosmetics, skincare, and fragrances.', actions: ['shop-beauty', 'try-samples'] },
          { id: 'b9', name: 'Bath & Body Works', type: 'beauty', description: 'Sells soaps, lotions, fragrances, and candles.', actions: ['shop-beauty', 'try-samples'] },
          { id: 'b10', name: 'Restrooms', type: 'service', description: 'Public restrooms.', actions: ['use-restroom'] },
          { id: 'b11', name: 'Food Court', type: 'food-court', description: 'A variety of food options to satisfy your hunger.', actions: ['eat-food', 'rest'] },
          { id: 'b12', name: 'Starbucks', type: 'food-court', description: 'Get your caffeine fix at this popular coffee chain.', actions: ['buy-coffee', 'rest', 'use-wifi'] },
          { id: 'b13', name: 'Victoria\'s Secret', type: 'clothing', description: 'Lingerie, beauty products, and accessories.', actions: ['shop-clothes', 'try-on'] },
          { id: 'b14', name: 'Foot Locker', type: 'clothing', description: 'Athletic footwear and apparel retailer.', actions: ['shop-clothes', 'try-on'] },
          { id: 'b15', name: 'Forever 21', type: 'clothing', description: 'Fast fashion retailer with trendy clothing and accessories.', actions: ['shop-clothes', 'try-on'] },
          { id: 'b16', name: 'Flex Fitness', type: 'service', description: 'Modern fitness center with equipment and classes.', actions: ['exercise', 'take-class', 'use-facilities'] },
        ]
      },
      {
        id: 3,
        name: 'Second Floor',
        stores: [
          { id: 'c0', name: 'Elevator', type: 'elevator', description: 'Use the elevator to move between floors.', actions: ['use-elevator'] },
          { id: 'c1', name: 'Cinema Complex', type: 'entertainment', description: 'Multiplex cinema showing the latest movies.', actions: ['watch-movie', 'buy-snacks'] },
          { id: 'c2', name: 'Arcade', type: 'entertainment', description: 'Video games and entertainment machines.', actions: ['play-games', 'win-tickets'] },
          { id: 'c3', name: 'Bowling Alley', type: 'entertainment', description: 'Bowling lanes with food and drinks.', actions: ['play-bowling', 'rent-shoes'] },
          { id: 'c4', name: 'Food Court', type: 'food-court', description: 'A variety of food options to satisfy your hunger.', actions: ['eat-food', 'rest'] },
          { id: 'c5', name: 'Cheesecake Factory', type: 'food-court', description: 'Restaurant known for its extensive menu and cheesecake selection.', actions: ['eat-food', 'order-dessert'] },
          { id: 'c6', name: 'P.F. Chang\'s', type: 'food-court', description: 'Asian restaurant serving Chinese cuisine.', actions: ['eat-food', 'order-drinks'] },
          { id: 'c7', name: 'The Olive Garden', type: 'food-court', description: 'Italian-American restaurant chain.', actions: ['eat-food', 'order-drinks'] },
          { id: 'c8', name: 'Books & Noble', type: 'entertainment', description: 'Bookstore chain with books, magazines, and a café.', actions: ['browse-books', 'read-book', 'buy-coffee'] },
          { id: 'c9', name: 'KidZone Play Area', type: 'entertainment', description: 'Children\'s play area with games and activities.', actions: ['play-games', 'rest'] },
          { id: 'c10', name: 'Arcade Zone', type: 'entertainment', description: 'Modern arcade with classic and new video games, prize machines, and interactive experiences.', actions: ['play-games', 'win-tickets'] },
          { id: 'c11', name: 'Ferrari Store', type: 'specialty', description: 'Official Ferrari merchandise and collectibles.', actions: ['shop-merchandise', 'view-displays'] },
          { id: 'c12', name: 'Starbucks', type: 'food-court', description: 'Get your caffeine fix at this popular coffee chain.', actions: ['buy-coffee', 'rest', 'use-wifi'] },
          { id: 'c13', name: 'Tesla Showroom', type: 'specialty', description: 'Electric vehicles and clean energy products.', actions: ['view-cars', 'test-drive'] },
          { id: 'c14', name: 'LEGO Store', type: 'specialty', description: 'LEGO toys, sets, and building experiences.', actions: ['shop-toys', 'build-lego'] },
          { id: 'c15', name: 'Disney Store', type: 'specialty', description: 'Official Disney merchandise and toys.', actions: ['shop-merchandise', 'meet-characters'] },
          { id: 'c16', name: 'Restrooms', type: 'service', description: 'Public restrooms.', actions: ['use-restroom'] },
          { id: 'c17', name: 'Holiday Magic', type: 'specialty', description: 'Seasonal decorations, ornaments, and festive items for all holidays.', actions: ['shop-merchandise', 'view-displays', 'holiday-decorate'] },
          { id: 'c18', name: 'VR Experience Center', type: 'entertainment', description: 'Cutting-edge virtual reality experiences and games.', actions: ['try-vr', 'play-games', 'shop-merchandise'] },
        ]
      },
      {
        id: 4,
        name: 'Skyzone Floor',
        stores: [
          { id: 'd0', name: 'Elevator', type: 'elevator', description: 'Use the elevator to move between floors.', actions: ['use-elevator'] },
          { id: 'd1', name: 'Skyzone', type: 'entertainment', description: 'Indoor trampoline park with wall-to-wall trampolines, foam pits, and dodgeball courts.', actions: ['jump-trampoline', 'play-games', 'exercise'] },
          { id: 'd2', name: 'Skyzone Cafe', type: 'food-court', description: 'Refreshments and snacks for trampoline park visitors.', actions: ['eat-food', 'buy-snacks', 'rest'] },
          { id: 'd3', name: 'Party Rooms', type: 'entertainment', description: 'Private party rooms for birthday celebrations and events.', actions: ['play-games', 'rest'] },
          { id: 'd4', name: 'Pro Shop', type: 'specialty', description: 'Skyzone merchandise, trampoline gear, and souvenirs.', actions: ['shop-merchandise', 'view-displays'] },
          { id: 'd5', name: 'Foam Zone', type: 'entertainment', description: 'Special area with foam pits for safe jumping and tricks.', actions: ['jump-trampoline', 'play-games'] },
          { id: 'd6', name: 'Dodgeball Arena', type: 'entertainment', description: 'Trampoline dodgeball courts for competitive play.', actions: ['play-games', 'exercise'] },
          { id: 'd7', name: 'Basketball Slam', type: 'entertainment', description: 'Trampoline basketball courts for high-flying dunks.', actions: ['play-games', 'exercise'] },
          { id: 'd8', name: 'Ninja Course', type: 'entertainment', description: 'Obstacle course with trampolines and challenging elements.', actions: ['exercise', 'play-games'] },
          { id: 'd9', name: 'Restrooms', type: 'service', description: 'Public restrooms.', actions: ['use-restroom'] },
          { id: 'd10', name: 'Locker Rooms', type: 'service', description: 'Secure lockers for storing personal items while jumping.', actions: ['rest'] },
          { id: 'd11', name: 'Safety Briefing Area', type: 'service', description: 'Mandatory safety orientation for all jumpers.', actions: ['get-info'] },
          { id: 'd12', name: 'Spectator Area', type: 'entertainment', description: 'Comfortable seating area for watching jumpers.', actions: ['rest', 'view-displays'] }
        ]
      }
    ]
  };

  // Simulator state
  const simState = {
    isRunning: false,
    money: 1000,
    energy: 100,
    happiness: 50,
    currentFloor: 1,
    avatar: {
      x: 0,
      y: 0,
      element: null
    },
    visitedStores: [],
    currentStore: null,
    storeElements: {},
    shoppingCart: []
  };

  // UI Elements
  const moneyDisplay = document.getElementById('money-amount');
  const energyDisplay = document.getElementById('energy-level');
  const happinessDisplay = document.getElementById('happiness-level');
  const startButton = document.getElementById('start-sim');
  const resetButton = document.getElementById('reset-sim');
  const modal = document.getElementById('store-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalStoreName = document.getElementById('modal-store-name');
  const modalStoreDescription = document.getElementById('modal-store-description');
  const storeActions = document.getElementById('store-actions');
  const storeOptions = document.getElementById('store-options');
  const messageBox = document.getElementById('message-box');
  const avatar = document.getElementById('avatar');
  const elevatorDialog = document.getElementById('elevator-dialog');
  const elevatorFloors = document.getElementById('elevator-floors');
  const elevatorClose = document.getElementById('elevator-close');
  const cartButton = document.getElementById('shopping-cart-btn');
  const cartCount = document.getElementById('cart-count');
  const cartDialog = document.getElementById('cart-dialog');
  const cartClose = document.getElementById('cart-close');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Hide avatar initially
  avatar.style.display = 'none';

  // Helper function to get emoji for each store type
  function getStoreEmoji(type, name) {
    // Default emojis by store type
    const emojiMap = {
      'food-court': '🍽️',
      'clothing': '👕',
      'electronics': '📱',
      'department-store': '🏬',
      'entertainment': '🎮',
      'specialty': '🎁',
      'service': '🔧',
      'entrance': '🚪',
      'beauty': '💄',
      'elevator': '↕️'
    };
    
    // Special cases for specific stores
    const specialCases = {
      'Starbucks': '☕',
      'Baskin Robbins': '🍦',
      'Apple Store': '🍎',
      'McDonald\'s': '🍔',
      'Lululemon': '🧘',
      'Aritzia': '👚',
      'Tesla Showroom': '🚗',
      'Elevator': '↕️',
      'Cinema Complex': '🎬',
      'Arcade': '🕹️',
      'Arcade Zone': '🕹️',
      'Skyzone': '🤸',
      'Bowling Alley': '🎳',
      'Books & Noble': '📚',
      'LEGO Store': '🧱',
      'Disney Store': '🏰',
      'Ferrari Store': '🏎️',
      'Cheesecake Factory': '🍰',
      'P.F. Chang\'s': '🥢',
      'The Olive Garden': '🍝',
      'KidZone Play Area': '👶',
      'Restrooms': '🚻',
      'Information Desk': 'ℹ️',
      'Digital Kiosk': '📱',
      'ATMs': '💰',
      'Sephora': '💋',
      'Bath & Body Works': '🧴',
      'Victoria\'s Secret': '💫',
      'Foot Locker': '👟',
      'Forever 21': '👗',
      'Uniqlo': '👘',
      'Target': '🎯',
      'H&M': '🛍️',
      'Nike': '✓',
      'Adidas': '👟',
      'Zara': '👔',
      'Nordstrom': '👜',
      'Pop Mart': '🎁',
      'GameStop': '🎮',
      'Samsung': '📲',
      'Best Buy': '🖥️',
      'Food Court': '🍕',
      'Entrance A': '🚶',
      'Entrance B': '🚶',
      'Holiday Magic': '🎄',
      'VR Experience Center': '🔱',
      'Flex Fitness': '🏋️'
    };
    
    return specialCases[name] || emojiMap[type] || '🏪';
  }

  // Initialize the map and UI
  renderFloorTabs();
  renderFloorMap(simState.currentFloor);
  updateCartCount(); // Initialize cart count

  function renderFloorTabs() {
    const tabsContainer = document.querySelector('.floor-tabs');
    tabsContainer.innerHTML = '';

    mallData.floors.forEach(floor => {
      const tab = document.createElement('button');
      tab.className = `floor-tab ${floor.id === simState.currentFloor ? 'active' : ''}`;
      tab.textContent = floor.name;
      tab.dataset.floorId = floor.id;
      tab.addEventListener('click', () => {
        if (simState.isRunning) {
          showMessage("You need to take the elevator or stairs to change floors");
          return;
        }
        
        simState.currentFloor = parseInt(floor.id);
        document.querySelectorAll('.floor-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderFloorMap(simState.currentFloor);
      });
      tabsContainer.appendChild(tab);
    });
  }

  function renderFloorMap(floorId) {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.innerHTML = '';
    
    // Re-add the avatar to the map
    mapContainer.appendChild(avatar);

    const floor = mallData.floors.find(f => f.id === floorId);
    simState.storeElements = {};
    
    floor.stores.forEach(store => {
      const storeElement = document.createElement('div');
      storeElement.className = `store ${store.type}`;
      storeElement.id = store.id;
      const emoji = getStoreEmoji(store.type, store.name);
      storeElement.innerHTML = `<h3>${emoji} ${store.name}</h3>`;
      
      // In simulation mode, add click event for avatar movement
      storeElement.addEventListener('click', () => {
        if (simState.isRunning) {
          moveAvatarToStore(store);
        } else {
          openStoreModal(store);
        }
      });
      
      mapContainer.appendChild(storeElement);
      simState.storeElements[store.id] = storeElement;
    });
    
    // If simulation is running, show the avatar
    if (simState.isRunning) {
      avatar.style.display = 'flex';
      
      // Position avatar at a random store
      if (simState.avatar.x === 0 && simState.avatar.y === 0) {
        const randomStore = floor.stores[Math.floor(Math.random() * floor.stores.length)];
        const storeElement = document.getElementById(randomStore.id);
        const storeRect = storeElement.getBoundingClientRect();
        const mapRect = mapContainer.getBoundingClientRect();
        
        simState.avatar.x = storeRect.left - mapRect.left + storeRect.width / 2;
        simState.avatar.y = storeRect.top - mapRect.top + storeRect.height / 2;
        
        positionAvatar();
      }
    }
  }

  // Simulation controls
  startButton.addEventListener('click', toggleSimulation);
  resetButton.addEventListener('click', resetSimulation);
  
  function toggleSimulation() {
    simState.isRunning = !simState.isRunning;
    
    if (simState.isRunning) {
      startButton.textContent = 'Pause Simulation';
      startButton.style.backgroundColor = '#dc3545';
      avatar.style.display = 'flex';
      showMessage('Welcome to the Mega Mall Simulator! Click on stores to visit them.');
      
      // Ask for sound permission when simulation starts
    } else {
      startButton.textContent = 'Start Simulation';
      startButton.style.backgroundColor = '#28a745';
      avatar.style.display = 'none';
    }
  }
  
  function resetSimulation() {
    
    simState.isRunning = false;
    simState.money = 1000;
    simState.energy = 100;
    simState.happiness = 50;
    simState.currentFloor = 1;
    simState.avatar.x = 0;
    simState.avatar.y = 0;
    simState.visitedStores = [];
    simState.currentStore = null;
    simState.shoppingCart = [];
    
    
    updateStats();
    updateCartCount();
    startButton.textContent = 'Start Simulation';
    startButton.style.backgroundColor = '#28a745';
    avatar.style.display = 'none';
    
    renderFloorTabs();
    renderFloorMap(simState.currentFloor);
    showMessage('Simulation reset. Ready to start again!');
  }
  
  // Avatar movement
  function moveAvatarToStore(store) {
    simState.currentStore = store;
    const storeElement = document.getElementById(store.id);
    const storeRect = storeElement.getBoundingClientRect();
    const mapRect = document.querySelector('.map-container').getBoundingClientRect();
    
    // Calculate avatar position relative to map
    const targetX = storeRect.left - mapRect.left + storeRect.width / 2;
    const targetY = storeRect.top - mapRect.top + storeRect.height / 2;
    
    // Animate avatar movement
    const duration = 500; // milliseconds
    const startX = simState.avatar.x;
    const startY = simState.avatar.y;
    const startTime = performance.now();
    
    function animateMovement(currentTime) {
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        simState.avatar.x = startX + (targetX - startX) * progress;
        simState.avatar.y = startY + (targetY - startY) * progress;
        positionAvatar();
        requestAnimationFrame(animateMovement);
      } else {
        simState.avatar.x = targetX;
        simState.avatar.y = targetY;
        positionAvatar();
        visitStore(store);
      }
    }
    
    requestAnimationFrame(animateMovement);
  }
  
  function positionAvatar() {
    avatar.style.left = `${simState.avatar.x - 15}px`; // Center avatar (30px width / 2)
    avatar.style.top = `${simState.avatar.y - 15}px`; // Center avatar (30px height / 2)
  }
  
  // Store interaction
  function visitStore(store) {
    const energyCost = Math.floor(Math.random() * 5) + 1;
    let alreadyVisited = simState.visitedStores.includes(store.id);
    
    if (!alreadyVisited) {
      simState.visitedStores.push(store.id);
    }
    
    // Reduce energy from walking
    updateEnergy(-energyCost);
    
    // Open store modal with options
    openStoreModal(store);
  }
  
  function openStoreModal(store) {
    const emoji = getStoreEmoji(store.type, store.name);
    modalStoreName.textContent = `${emoji} ${store.name}`;
    modalStoreDescription.textContent = store.description;
    
    // Clear previous actions
    storeActions.innerHTML = '';
    
    // Only show actions in simulation mode
    if (simState.isRunning) {
      store.actions.forEach(action => {
        const actionBtn = document.createElement('button');
        actionBtn.className = 'action-btn';
        actionBtn.textContent = formatActionName(action);
        actionBtn.addEventListener('click', () => {
          performAction(action, store);
          closeModal();
        });
        storeActions.appendChild(actionBtn);
      });
    }
    
    // Add exit button
    const exitBtn = document.createElement('button');
    exitBtn.className = 'action-btn';
    exitBtn.style.backgroundColor = '#6c757d';
    exitBtn.textContent = 'Exit';
    exitBtn.addEventListener('click', closeModal);
    storeActions.appendChild(exitBtn);
    
    // Show modal
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    modal.style.display = 'none';
  }
  
  modalClose.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
    if (e.target === elevatorDialog) {
      closeElevatorDialog();
    }
    if (e.target === cartDialog) {
      closeCartDialog();
    }
  });
  
  // Shopping Cart functionality
  cartButton.addEventListener('click', showCartDialog);
  cartClose.addEventListener('click', closeCartDialog);
  
  function showCartDialog() {
    // Update cart items
    renderCartItems();
    
    // Show cart dialog
    cartDialog.style.display = 'flex';
  }
  
  function closeCartDialog() {
    cartDialog.style.display = 'none';
  }
  
  function updateCartCount() {
    cartCount.textContent = simState.shoppingCart.length;
  }
  
  function renderCartItems() {
    // Clear previous items
    cartItems.innerHTML = '';
    
    if (simState.shoppingCart.length === 0) {
      cartItems.innerHTML = '<p style="text-align: center;">Your shopping cart is empty.</p>';
      cartTotal.textContent = '$0.00';
      return;
    }
    
    // Calculate total price
    let totalPrice = 0;
    
    // Group items by type and store
    const groupedItems = {};
    
    simState.shoppingCart.forEach(item => {
      const key = `${item.type}|${item.store}`;
      if (!groupedItems[key]) {
        groupedItems[key] = {
          type: item.type,
          store: item.store,
          emoji: item.emoji,
          price: item.price,
          count: 0
        };
      }
      groupedItems[key].count++;
      totalPrice += item.price;
    });
    
    // Display grouped items
    Object.values(groupedItems).forEach(group => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      
      const itemPrice = (group.price * group.count).toFixed(2);
      
      itemElement.innerHTML = `
        <div class="cart-item-name">
          <span>${group.emoji}</span>
          <div>
            <div>${group.type} from ${group.store}</div>
            <div style="font-size: 0.8rem; color: #666;">Quantity: ${group.count}</div>
          </div>
        </div>
        <div class="cart-item-price">$${itemPrice}</div>
      `;
      
      cartItems.appendChild(itemElement);
    });
    
    // Update total
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  function addToCart(type, store, price) {
    const emoji = getItemEmoji(type);
    
    // Add item to cart
    simState.shoppingCart.push({
      type,
      store,
      emoji,
      price
    });
    
    // Update cart count
    updateCartCount();
  }
  
  function getItemEmoji(itemType) {
    const itemEmojis = {
      'Coffee': '☕',
      'Food': '🍔',
      'Ice Cream': '🍦',
      'Clothes': '👕',
      'Electronics': '📱',
      'General Items': '🛍️',
      'Beauty Products': '💄',
      'Merchandise': '🎁',
      'Snacks': '🍿',
      'Toys': '🧸',
      'Books': '📚',
      'Activity Ticket': '🎫',
      'Holiday Decorations': '🎁',
      'VR Experience': '🔮',
      'Fitness Session': '🏋️'
    };
    
    return itemEmojis[itemType] || '🛒';
  }
  
  // Elevator functionality
  function showElevatorDialog(store) {
    // Close the store modal
    closeModal();
    
    // Clear previous floors
    elevatorFloors.innerHTML = '';
    
    // Add floor buttons
    mallData.floors.forEach(floor => {
      const floorButton = document.createElement('button');
      floorButton.className = `floor-button ${floor.id === simState.currentFloor ? 'current' : ''}`;
      floorButton.textContent = `${floor.name}`;
      
      // Disable current floor button
      if (floor.id === simState.currentFloor) {
        floorButton.disabled = true;
        floorButton.textContent += ' (Current Floor)';
      } else {
        floorButton.addEventListener('click', () => {
          useElevator(floor.id, store);
        });
      }
      
      elevatorFloors.appendChild(floorButton);
    });
    
    // Show elevator dialog
    elevatorDialog.style.display = 'flex';
  }
  
  function closeElevatorDialog() {
    elevatorDialog.style.display = 'none';
  }
  
  elevatorClose.addEventListener('click', closeElevatorDialog);
  
  function useElevator(floorId, fromStore) {
    const energyCost = 2;
    updateEnergy(-energyCost);
    
    // Show transition message
    showMessage(`Taking the elevator to ${mallData.floors.find(f => f.id === floorId).name}...`);
    
    // Close the elevator dialog
    closeElevatorDialog();
    
    
    // Simulate elevator transition with timeout
    setTimeout(() => {
      // Change floor
      simState.currentFloor = floorId;
      
      // Update tabs
      document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.classList.remove('active');
        if (parseInt(tab.dataset.floorId) === floorId) {
          tab.classList.add('active');
        }
      });
      
      // Render new floor
      renderFloorMap(floorId);
      
      // Position avatar at the elevator on the new floor
      const elevatorId = floorId === 1 ? 'a0' : (floorId === 2 ? 'b0' : 'c0');
      const elevatorElement = document.getElementById(elevatorId);
      
      if (elevatorElement) {
        const elevatorRect = elevatorElement.getBoundingClientRect();
        const mapRect = document.querySelector('.map-container').getBoundingClientRect();
        
        simState.avatar.x = elevatorRect.left - mapRect.left + elevatorRect.width / 2;
        simState.avatar.y = elevatorRect.top - mapRect.top + elevatorRect.height / 2;
        
        positionAvatar();
      }
      
      // Show arrival message
      showMessage(`You arrived at ${mallData.floors.find(f => f.id === floorId).name}`);
    }, 2000); // 2 second transition
  }
  
  // Action handling
  function performAction(action, store) {
    const costs = {
      'buy-coffee': { money: -5, energy: 15, happiness: 5 },
      'eat-food': { money: -15, energy: 30, happiness: 10 },
      'rest': { money: 0, energy: 20, happiness: 5 },
      'use-wifi': { money: 0, energy: -5, happiness: 5 },
      'shop-clothes': { money: -50, energy: -10, happiness: 15 },
      'try-on': { money: 0, energy: -5, happiness: 10 },
      'shop-electronics': { money: -100, energy: -10, happiness: 20 },
      'tech-support': { money: -20, energy: -10, happiness: -5 },
      'play-demo': { money: 0, energy: -5, happiness: 15 },
      'shop-general': { money: -30, energy: -15, happiness: 10 },
      'shop-beauty': { money: -40, energy: -5, happiness: 15 },
      'try-samples': { money: 0, energy: -5, happiness: 10 },
      'use-restroom': { money: 0, energy: 5, happiness: 5 },
      'withdraw-cash': { money: 5000, energy: -2, happiness: 5 },
      'check-balance': { money: 0, energy: -1, happiness: 0 },
      'enter-exit': { money: 0, energy: -2, happiness: 0 },
      'get-info': { money: 0, energy: -2, happiness: 5 },
      'get-map': { money: 0, energy: -1, happiness: 10 },
      'use-elevator': { money: 0, energy: -2, happiness: 0 },
      'watch-movie': { money: -20, energy: -10, happiness: 25 },
      'buy-snacks': { money: -10, energy: 10, happiness: 10 },
      'play-games': { money: -15, energy: -15, happiness: 20 },
      'jump-trampoline': { money: -18, energy: -25, happiness: 35 },
      'win-tickets': { money: -10, energy: -10, happiness: 30 },
      'play-bowling': { money: -20, energy: -20, happiness: 25 },
      'rent-shoes': { money: -5, energy: -2, happiness: 0 },
      'order-dessert': { money: -10, energy: 5, happiness: 15 },
      'order-drinks': { money: -8, energy: 5, happiness: 10 },
      'browse-books': { money: 0, energy: -5, happiness: 10 },
      'read-book': { money: 0, energy: -10, happiness: 15 },
      'shop-merchandise': { money: -40, energy: -5, happiness: 15 },
      'view-displays': { money: 0, energy: -5, happiness: 10 },
      'view-cars': { money: 0, energy: -5, happiness: 15 },
      'test-drive': { money: 0, energy: -10, happiness: 25 },
      'shop-toys': { money: -30, energy: -5, happiness: 15 },
      'build-lego': { money: -5, energy: -10, happiness: 20 },
      'meet-characters': { money: -5, energy: -5, happiness: 25 },
      'holiday-decorate': { money: -25, energy: -15, happiness: 30 },
      'try-vr': { money: -35, energy: -20, happiness: 40 },
      'exercise': { money: -15, energy: -25, happiness: 25 },
      'take-class': { money: -20, energy: -30, happiness: 30 },
      'use-facilities': { money: -10, energy: -20, happiness: 15 },
      'use-directory': { money: 0, energy: -1, happiness: 5 },
      'check-events': { money: 0, energy: -1, happiness: 10 },
      'take-virtual-tour': { money: 0, energy: -3, happiness: 15 }
    };
    
    const actionCost = costs[action] || { money: 0, energy: -5, happiness: 5 };
    
    // Special handling for elevator
    if (action === 'use-elevator') {
      showElevatorDialog(store);
      return;
    }
    
    // Check if enough money and energy
    if (simState.money + actionCost.money < 0) {
      showMessage("You don't have enough money for this!");
      return;
    }
    
    if (simState.energy + actionCost.energy < 0) {
      showMessage("You're too tired for this activity!");
      return;
    }
    
    // Special handling for restroom visit
    if (action === 'use-restroom') {
      showMessage("💨 *fart noises* 💨");
      
      // Random chance (15%) the toilet paper runs out
      if (Math.random() < 0.15) {
        // Delay the message
        setTimeout(() => {
          showMessage("Oh no! The toilet paper ran out! You had to waddle to another stall... (-5 happiness)");
          updateHappiness(-5);
        }, 2500);
      }
    }
    
    // Apply costs/benefits
    updateMoney(actionCost.money);
    updateEnergy(actionCost.energy);
    updateHappiness(actionCost.happiness);
    
    // Add items to cart for shopping actions
    if (action === 'buy-coffee') {
      addToCart('Coffee', store.name, 5);
    } else if (action === 'eat-food') {
      addToCart('Food', store.name, 15);
    } else if (action === 'shop-clothes') {
      addToCart('Clothes', store.name, 50);
    } else if (action === 'shop-electronics') {
      addToCart('Electronics', store.name, 100);
    } else if (action === 'shop-general') {
      addToCart('General Items', store.name, 30);
    } else if (action === 'shop-beauty') {
      addToCart('Beauty Products', store.name, 40);
    } else if (action === 'shop-merchandise') {
      addToCart('Merchandise', store.name, 40);
    } else if (action === 'buy-snacks') {
      addToCart('Snacks', store.name, 10);
    } else if (action === 'shop-toys') {
      addToCart('Toys', store.name, 30);
    } else if (action === 'holiday-decorate') {
      addToCart('Holiday Decorations', store.name, 25);
    } else if (action === 'try-vr') {
      addToCart('VR Experience', store.name, 35);
    } else if (action === 'exercise' || action === 'take-class' || action === 'use-facilities') {
      addToCart('Fitness Session', store.name, action === 'take-class' ? 20 : (action === 'exercise' ? 15 : 10));
    } else if (action === 'jump-trampoline') {
      addToCart('Activity Ticket', store.name, 18);
    } else if (action === 'order-dessert') {
      // Special case for Baskin Robbins
      if (store.name === 'Baskin Robbins') {
        addToCart('Ice Cream', store.name, 8);
      } else {
        addToCart('Food', store.name, 10);
      }
    } else if (action === 'order-drinks') {
      addToCart('Food', store.name, 8);
    }
    
    // Show action message
    let message = getActionMessage(action, store.name);
    
    // Special message for Baskin Robbins ice cream
    if (action === 'order-dessert' && store.name === 'Baskin Robbins') {
      message = `You enjoyed a delicious ice cream cone at ${store.name}!`;
    }
    
    showMessage(message);
  }
  
  function getActionMessage(action, storeName) {
    const messages = {
      'buy-coffee': `You bought a coffee at ${storeName}!`,
      'eat-food': `You enjoyed a meal at ${storeName}!`,
      'rest': `You took a break at ${storeName}.`,
      'use-wifi': `You used the free WiFi at ${storeName}.`,
      'shop-clothes': `You purchased some stylish clothes from ${storeName}!`,
      'try-on': `You tried on some items at ${storeName}.`,
      'shop-electronics': `You bought a new gadget at ${storeName}!`,
      'tech-support': `You got tech support at ${storeName}. Not the most fun, but necessary.`,
      'play-demo': `You tried out the latest games at ${storeName}!`,
      'shop-general': `You bought some items from ${storeName}.`,
      'shop-beauty': `You bought beauty products at ${storeName}!`,
      'try-samples': `You tried some samples at ${storeName}.`,
      'use-restroom': `You "relieved yourself" at the restroom. Much better now!`,
      'withdraw-cash': `You withdrew $5,000 from the ATM!`,
      'check-balance': `You checked your account balance.`,
      'enter-exit': `You went through ${storeName}.`,
      'get-info': `You got information about the mall at ${storeName}.`,
      'get-map': `You picked up a mall map from ${storeName}.`,
      'use-elevator': `You used the elevator at ${storeName}.`,
      'watch-movie': `You watched a movie at ${storeName}!`,
      'buy-snacks': `You bought snacks at ${storeName}.`,
      'play-games': `You played games at ${storeName}!`,
      'jump-trampoline': `You had an amazing time jumping on trampolines at ${storeName}!`,
      'win-tickets': `You won tickets at ${storeName}!`,
      'play-bowling': `You went bowling at ${storeName}!`,
      'rent-shoes': `You rented bowling shoes at ${storeName}.`,
      'order-dessert': `You ordered a delicious dessert at ${storeName}!`,
      'order-drinks': `You ordered drinks at ${storeName}.`,
      'browse-books': `You browsed books at ${storeName}.`,
      'read-book': `You read a book at ${storeName}.`,
      'shop-merchandise': `You bought merchandise at ${storeName}!`,
      'view-displays': `You checked out the displays at ${storeName}.`,
      'view-cars': `You viewed the cars at ${storeName}.`,
      'test-drive': `You test drove a car at ${storeName}! Amazing!`,
      'shop-toys': `You bought toys at ${storeName}!`,
      'build-lego': `You built something cool with LEGO at ${storeName}!`,
      'meet-characters': `You met characters at ${storeName}!`,
      'holiday-decorate': `You purchased festive decorations from ${storeName}! Your home will look amazing for the holidays!`,
      'try-vr': `You experienced an incredible virtual reality adventure at ${storeName}! Mind blown!`,
      'exercise': `You had a great workout at ${storeName}! Feeling energized despite the fatigue.`,
      'take-class': `You participated in a fantastic fitness class at ${storeName}!`,
      'use-facilities': `You used the facilities at ${storeName}. Good for your health!`,
      'use-directory': `You browsed the store directory at the ${storeName}.`,
      'check-events': `You checked upcoming events at the mall using the ${storeName}.`,
      'take-virtual-tour': `You took a virtual tour of the mall using the ${storeName}!`
    };
    
    return messages[action] || `You visited ${storeName}.`;
  }
  
  // Helper functions
  function formatActionName(action) {
    return action.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  function updateMoney(amount) {
    simState.money += amount;
    moneyDisplay.textContent = simState.money;
    
    if (amount !== 0) {
      if (amount > 0) {
        moneyDisplay.classList.add('increase');
      } else {
        moneyDisplay.classList.add('decrease');
      }
      
      setTimeout(() => {
        moneyDisplay.classList.remove('increase', 'decrease');
      }, 1000);
    }
  }
  
  function updateEnergy(amount) {
    simState.energy = Math.max(0, Math.min(100, simState.energy + amount));
    energyDisplay.textContent = simState.energy;
    
    if (amount !== 0) {
      if (amount > 0) {
        energyDisplay.classList.add('increase');
      } else {
        energyDisplay.classList.add('decrease');
      }
      
      setTimeout(() => {
        energyDisplay.classList.remove('increase', 'decrease');
      }, 1000);
    }
    
    // Check if energy is depleted
    if (simState.energy === 0) {
      showMessage("You're completely exhausted! Get some rest or food to recover energy.");
    }
  }
  
  function updateHappiness(amount) {
    simState.happiness = Math.max(0, Math.min(100, simState.happiness + amount));
    happinessDisplay.textContent = simState.happiness;
    
    if (amount !== 0) {
      if (amount > 0) {
        happinessDisplay.classList.add('increase');
      } else {
        happinessDisplay.classList.add('decrease');
      }
      
      setTimeout(() => {
        happinessDisplay.classList.remove('increase', 'decrease');
      }, 1000);
    }
  }
  
  function updateStats() {
    moneyDisplay.textContent = simState.money;
    energyDisplay.textContent = simState.energy;
    happinessDisplay.textContent = simState.happiness;
  }
  
  function showMessage(message) {
    messageBox.textContent = message;
    messageBox.style.display = 'block';
    
    // Reset animation
    messageBox.style.animation = 'none';
    messageBox.offsetHeight; // Trigger reflow
    messageBox.style.animation = 'fadeOut 3s forwards';
    messageBox.style.animationDelay = '2s';
  }

  // Initialize legend
  const legendItems = [
    { type: 'food-court', label: 'Food & Dining', emoji: '🍽️' },
    { type: 'clothing', label: 'Clothing', emoji: '👕' },
    { type: 'electronics', label: 'Electronics', emoji: '📱' },
    { type: 'department-store', label: 'Department Stores', emoji: '🏬' },
    { type: 'entertainment', label: 'Entertainment', emoji: '🎮' },
    { type: 'specialty', label: 'Specialty Shops', emoji: '🎁' },
    { type: 'service', label: 'Services', emoji: '🔧' },
    { type: 'entrance', label: 'Entrances', emoji: '🚪' },
    { type: 'beauty', label: 'Beauty & Cosmetics', emoji: '💄' },
    { type: 'elevator', label: 'Elevators', emoji: '↕️' }
  ];

  const legendContainer = document.querySelector('.map-legend');
  legendItems.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.innerHTML = `
      <div class="legend-color ${item.type}"></div>
      <span>${item.emoji} ${item.label}</span>
    `;
    legendContainer.appendChild(legendItem);
  });
  
  // Add CSS animation classes
  const style = document.createElement('style');
  style.textContent = `
    .increase {
      animation: highlight-green 1s;
    }
    
    .decrease {
      animation: highlight-red 1s;
    }
    
    @keyframes highlight-green {
      0%, 100% { color: white; }
      50% { color: #28a745; }
    }
    
    @keyframes highlight-red {
      0%, 100% { color: white; }
      50% { color: #dc3545; }
    }
  `;
  document.head.appendChild(style);
});