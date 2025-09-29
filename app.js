// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Close mobile menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Product modal content
const productDetails = {
  "FT-5000": {
    title: "FT-5000 Industrial Chiller",
    content: `
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="http://static.photos/industry/640x360/101" alt="FT-5000 Industrial Chiller" class="rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800 mb-2">Key Features</h4>
                                <ul class="list-disc list-inside text-blue-700 space-y-1">
                                    <li>Cooling capacity: 500 kW</li>
                                    <li>Energy efficiency ratio: 5.8</li>
                                    <li>Noise level: <65 dB</li>
                                    <li>Dimensions: 2000 x 1000 x 1800 mm</li>
                                    <li>Weight: 1200 kg</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">Description</h4>
                            <p class="mb-4">The FT-5000 is our flagship industrial chiller designed for heavy-duty applications. With advanced variable speed technology, it adapts to your cooling needs while minimizing energy consumption.</p>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Applications</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Plastic injection molding</li>
                                <li>Laser cutting machines</li>
                                <li>Industrial process cooling</li>
                                <li>Large commercial HVAC systems</li>
                            </ul>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Specifications</h4>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Refrigerant</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">R-134a</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Power Supply</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">400V/50Hz/3Ph</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Water Flow Rate</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">86 m³/h</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Operating Range</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">5°C to 35°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `,
  },
  "FT-3000": {
    title: "FT-3000 Commercial Chiller",
    content: `
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="http://static.photos/industry/640x360/102" alt="FT-3000 Commercial Chiller" class="rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800 mb-2">Key Features</h4>
                                <ul class="list-disc list-inside text-blue-700 space-y-1">
                                    <li>Cooling capacity: 300 kW</li>
                                    <li>Energy efficiency ratio: 6.2</li>
                                    <li>Noise level: <60 dB</li>
                                    <li>Dimensions: 1800 x 800 x 1600 mm</li>
                                    <li>Weight: 850 kg</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">Description</h4>
                            <p class="mb-4">The FT-3000 is designed for commercial applications where reliability and efficiency are paramount. Its compact design makes it ideal for space-constrained installations.</p>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Applications</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Office building cooling</li>
                                <li>Hotel HVAC systems</li>
                                <li>Small industrial processes</li>
                                <li>Medical equipment cooling</li>
                            </ul>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Specifications</h4>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Refrigerant</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">R-410a</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Power Supply</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">380V/50Hz/3Ph</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Water Flow Rate</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">52 m³/h</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Operating Range</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">7°C to 30°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `,
  },
  "FT-M200": {
    title: "FT-M200 Modular Chiller",
    content: `
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="http://static.photos/industry/640x360/103" alt="FT-M200 Modular Chiller" class="rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800 mb-2">Key Features</h4>
                                <ul class="list-disc list-inside text-blue-700 space-y-1">
                                    <li>Modular capacity: 50-200 kW</li>
                                    <li>Energy efficiency ratio: 6.8</li>
                                    <li>Noise level: <55 dB</li>
                                    <li>Dimensions per module: 800 x 600 x 1200 mm</li>
                                    <li>Weight per module: 300 kg</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">Description</h4>
                            <p class="mb-4">The FT-M200 modular system allows you to start small and add capacity as your needs grow. Each module operates independently, providing redundancy and efficient partial-load operation.</p>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Applications</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Growing businesses</li>
                                <li>Data centers</li>
                                <li>Laboratory environments</li>
                                <li>Retail spaces</li>
                            </ul>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Specifications</h4>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Refrigerant</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">R-32</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Power Supply</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">230V/50Hz/1Ph</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Water Flow Rate</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">18 m³/h per module</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Operating Range</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">5°C to 40°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `,
  },
};

// Service modal content
const serviceDetails = {
  Installation: {
    title: "Professional Installation Services",
    content: `
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="http://static.photos/industry/640x360/104" alt="Installation Services" class="rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800 mb-2">Service Includes</h4>
                                <ul class="list-disc list-inside text-blue-700 space-y-1">
                                    <li>Site assessment</li>
                                    <li>Equipment placement</li>
                                    <li>Piping and electrical connections</li>
                                    <li>System commissioning</li>
                                    <li>Operator training</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">About Our Installation</h4>
                            <p class="mb-4">Our certified technicians ensure your chiller is installed correctly for optimal performance and longevity. We handle all aspects from delivery to final testing.</p>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Benefits</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Warranty compliance</li>
                                <li>Optimal system performance</li>
                                <li>Safety assurance</li>
                                <li>Reduced downtime</li>
                            </ul>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Pricing</h4>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Standard Installation</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$1,200 - $2,500</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Complex Installation</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$2,500 - $5,000</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Emergency Installation</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$3,000+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `,
  },
  Maintenance: {
    title: "Preventive Maintenance Services",
    content: `
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="http://static.photos/industry/640x360/105" alt="Maintenance Services" class="rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800 mb-2">Service Includes</h4>
                                <ul class="list-disc list-inside text-blue-700 space-y-1">
                                    <li>Comprehensive system inspection</li>
                                    <li>Refrigerant level check</li>
                                    <li>Cleaning of coils and filters</li>
                                    <li>Electrical component testing</li>
                                    <li>Performance optimization</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">About Our Maintenance</h4>
                            <p class="mb-4">Regular maintenance extends equipment life, improves efficiency, and prevents costly breakdowns. Our technicians follow manufacturer specifications.</p>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Benefits</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>15-30% energy savings</li>
                                <li>Reduced repair costs</li>
                                <li>Extended equipment lifespan</li>
                                <li>Priority service</li>
                            </ul>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Maintenance Plans</h4>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Basic (Annual)</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$600/year</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Standard (Semi-Annual)</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$1,000/year</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Premium (Quarterly)</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$1,800/year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `,
  },
  Repair: {
    title: "Emergency Repair Services",
    content: `
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <img src="http://static.photos/industry/640x360/106" alt="Repair Services" class="rounded-lg mb-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800 mb-2">Service Includes</h4>
                                <ul class="list-disc list-inside text-blue-700 space-y-1">
                                    <li>24/7 emergency response</li>
                                    <li>Diagnostic testing</li>
                                    <li>Component replacement</li>
                                    <li>System recalibration</li>
                                    <li>Post-repair testing</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800 mb-2">About Our Repair Services</h4>
                            <p class="mb-4">Our certified technicians are available around the clock to get your cooling system back online quickly with minimal disruption to your operations.</p>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Response Times</h4>
                            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                <li>Emergency: 2-4 hours</li>
                                <li>Priority: Same day</li>
                                <li>Standard: Next business day</li>
                            </ul>
                            
                            <h4 class="font-bold text-gray-800 mb-2">Pricing</h4>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Diagnostic Fee</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$150</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Labor Rate (Business Hours)</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$120/hour</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Labor Rate (After Hours)</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">$180/hour</td>
                                        </tr>
                                        <tr>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-700">Parts</td>
                                            <td class="px-2 py-1 whitespace-nowrap text-sm text-gray-500">At cost + 15%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `,
  },
};

// Show product modal
function showProductModal(productId) {
  const modal = document.getElementById("productModal");
  const product = productDetails[productId];

  document.getElementById("modalProductTitle").textContent = product.title;
  document.getElementById("modalProductContent").innerHTML = product.content;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

// Show service modal
function showServiceModal(serviceName) {
  const modal = document.getElementById("serviceModal");
  const service = serviceDetails[serviceName];

  document.getElementById("modalServiceTitle").textContent = service.title;
  document.getElementById("modalServiceContent").innerHTML = service.content;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

// Close any modal
function closeModal() {
  document.getElementById("productModal").classList.add("hidden");
  document.getElementById("serviceModal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// Request quote for a product
function requestQuote(productName) {
  closeModal();
  showNotification(
    `Quote request for ${productName} has been submitted. Our sales team will contact you shortly.`
  );

  // In a real application, you would send this to your backend
  console.log(`Quote requested for: ${productName}`);
  // Example: fetch('/api/quote', { method: 'POST', body: JSON.stringify({ product: productName }) });
}

// Request a service
function requestService(serviceName) {
  closeModal();
  showNotification(
    `Service request for ${serviceName} has been submitted. Our team will contact you to schedule.`
  );

  // In a real application, you would send this to your backend
  console.log(`Service requested: ${serviceName}`);
  // Example: fetch('/api/service', { method: 'POST', body: JSON.stringify({ service: serviceName }) });
}

// Show success notification
function showNotification(message) {
  const notification = document.getElementById("successNotification");
  document.getElementById("successMessage").textContent = message;

  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 5000);
}

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    interest: document.getElementById("interest").value,
    message: document.getElementById("message").value,
  };

  // In a real application, you would send this to your backend
  console.log("Contact form submitted:", formData);
  // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

  showNotification(
    "Thank you for your message! We will respond within 24 hours."
  );
  this.reset();
});

// Replace feather icons
feather.replace();


















