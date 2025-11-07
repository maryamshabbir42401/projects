const cars = [
      { name: "Mercedes", type: "Sedan", price: 25, img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_352,h_235,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/920e7a38d00d6815d8d9ec6adc76a49f/2023_04_03_bmw_mena_the_electric_cars_i7.jpg", fuel: "Petrol" },
      { name: "Mercedes", type: "Sport", price: 50, img: "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2015/01/10/1420802393011411000.jpg?itok=oE7OwszR", fuel: "PB 95" },
      { name: "Porsche", type: "SUV", price: 40, img: "https://cometinsure.com/blog/wp-content/uploads/2024/08/Best-Fuel-Average-Cars-in-Pakistan.jpg", fuel: "Petrol" },
      { name: "Toyota", type: "Sedan", price: 35, img: "https://static.lambocars.com/wp-content/uploads/2023/09/P90517982_highRes_the-new-bmw-x5-m-com-1600x1067.jpg", fuel: "Diesel" },
      { name: "Porsche", type: "SUV", price: 40, img: "https://paultan.org/image/2018/08/Lamborghini-Aventador-SVJ-7-850x453-BM-850x453.jpg", fuel: "Diesel" },
      { name: "Toyota", type: "Sedan", price: 35, img: "https://static.lambocars.com/wp-content/uploads/2023/09/P90517982_highRes_the-new-bmw-x5-m-com-1600x1067.jpg", fuel: "Diesel" },
    
    ];

    // Render cards dynamically
    const container = document.getElementById("carContainer");
    cars.forEach(car => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition";

      card.innerHTML = `
        <img src="${car.img}" alt="${car.name}" class="w-full h-40 object-cover rounded-lg mb-4">
        <div class="flex justify-between items-center mb-1">
          <h3 class="text-lg font-semibold">${car.name}</h3>
          <p class="text-blue-600 font-semibold">$${car.price} <span class="text-gray-500 text-sm">per day</span></p>
        </div>
        <p class="text-gray-500 mb-4">${car.type}</p>

        <div class="flex items-center gap-4 text-gray-600 text-sm mb-5">
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-gear"></i> Automat
          </div>
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-gas-pump"></i> ${car.fuel}
          </div>
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-snowflake"></i> Air Conditioner
          </div>
        </div>

        <button class="bg-blue-700 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-800">
          View Details
        </button>
      `;

      container.appendChild(card);
    });
    