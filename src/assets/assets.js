import logo from './logo.png';
import search_icon from './search_icon.svg';
import main_car from './main_car.png';
import car_image1 from './car_image1.png';
import car_image2 from './car_image2.png';
import car_image3 from './car_image3.png';
import car_image4 from './car_image4.png';
import users_icon from './users_icon.svg';
import fuel_icon from './fuel_icon.svg';
import car_icon from './car_icon.svg';
import location_icon from './location_icon.svg';
import banner_car_image from './banner_car_image.png';
import facebook_logo from './facebook_logo.svg';
import twitter_logo from './twitter_logo.svg';
import instagram_logo from './instagram_logo.svg';
import check_icon from './check_icon.svg';
import user_profile from './user_profile.png';
import edit_icon from './edit_icon.svg';
import dashboardIcon from './dashboardIcon.svg';
import dashboardIconColored from './dashboardIconColored.svg';
import addIcon from './addIcon.svg';
import addIconColored from './addIconColored.svg';
import carIcon from './carIcon.svg';
import carIconColored from './carIconColored.svg';
import listIcon from './listIcon.svg';
import listIconColored from './listIconColored.svg';
import cautionIconColored from './cautionIconColored.svg';
import eye_close_icon from './eye_close_icon.svg';
import eye_icon from './eye_icon.svg';
import delete_icon from './delete_icon.svg';

export const menuLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Cars',
    path: '/Cars',
  },
  {
    name: 'My Bookings',
    path: '/Bookings',
  },
];


export const cityList = [
  'Bangalore',
  'Mumbai',
  'Delhi',
  'Chennai',
  'Hyderabad',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Goa'
];

export const carList = [
  {
    id: 1,
    name: 'BMW X5',
    year: 2022,
    type: 'SUV',
    pricePerDay: '₹8200/day',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: '5 Seats',
    location: 'Bangalore',
    available: true,
    image: car_image1,
    description: 'The BMW X5 is a luxurious SUV that offers a perfect mix of performance, technology, and comfort for long-distance and city driving.',
    features: ['Leather Seats', 'Sunroof', 'GPS Navigation', 'Rear Camera']
  },
  {
    id: 2,
    name: 'Audi Q7',
    year: 2023,
    type: 'SUV',
    pricePerDay: '₹8800/day',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: '7 Seats',
    location: 'Mumbai',
    available: true,
    image: car_image2,
    description: 'The Audi Q7 is a spacious luxury SUV with cutting-edge tech, advanced safety features, and a smooth drive.',
    features: ['7 Airbags', 'Bluetooth Audio', 'Cruise Control', 'All Wheel Drive']
  },
  {
    id: 3,
    name: 'Mercedes GLC',
    year: 2022,
    type: 'SUV',
    pricePerDay: '₹9600/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: '5 Seats',
    location: 'Delhi',
    available: true,
    image: car_image3,
    description: 'The Mercedes GLC is a premium SUV known for its elegant design, strong diesel performance, and luxurious interior.',
    features: ['Ambient Lighting', 'Voice Control', 'Wireless Charging', 'Hill Assist']
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    year: 2023,
    type: 'Sedan',
    pricePerDay: '₹10,200/day',
    fuel: 'Electric',
    transmission: 'Automatic',
    seats: '5 Seats',
    location: 'Chennai',
    available: true,
    image: car_image4,
    description: 'Tesla Model 3 is a futuristic electric sedan with autopilot capabilities, zero emissions, and an ultra-modern interior.',
    features: ['Autopilot', 'Touchscreen Panel', 'Keyless Entry', 'Fast Charging']
  },
  {
    id: 5,
    name: 'Jeep Compass',
    year: 2022,
    type: 'SUV',
    pricePerDay: '₹7200/day',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: '5 Seats',
    location: 'Hyderabad',
    available: true,
    image: car_image1,
    description: 'Jeep Compass is a rugged and compact SUV offering off-road capabilities and comfort, ideal for Indian roads.',
    features: ['ABS', 'Dual-Zone AC', 'Rear Parking Sensors', 'Touchscreen Display']
  },
  {
    id: 6,
    name: 'Hyundai Tucson',
    year: 2023,
    type: 'SUV',
    pricePerDay: '₹7600/day',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: '5 Seats',
    location: 'Kolkata',
    available: true,
    image: car_image2,
    description: 'Hyundai Tucson is a stylish SUV packed with advanced tech, comfort features, and great fuel efficiency.',
    features: ['Apple CarPlay', 'Ventilated Seats', 'LED Headlamps', '360° Camera']
  },
  {
    id: 7,
    name: 'Toyota Fortuner',
    year: 2022,
    type: 'SUV',
    pricePerDay: '₹8400/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: '7 Seats',
    location: 'Pune',
    available: true,
    image: car_image3,
    description: 'Toyota Fortuner is a reliable and powerful SUV known for its durability, large capacity, and road presence.',
    features: ['Hill Descent Control', 'Touchscreen Navigation', 'Power Tailgate', 'Roof Rails']
  },
  {
    id: 8,
    name: 'Honda City',
    year: 2023,
    type: 'Sedan',
    pricePerDay: '₹5400/day',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: '5 Seats',
    location: 'Ahmedabad',
    available: true,
    image: car_image4,
    description: 'Honda City is a popular mid-size sedan offering great mileage, sleek design, and a comfortable ride.',
    features: ['Eco Mode', 'Rear AC Vents', 'Lane Watch Camera', 'Push Start Button']
  },
  {
    id: 9,
    name: 'Mahindra XUV700',
    year: 2022,
    type: 'SUV',
    pricePerDay: '₹7800/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: '7 Seats',
    location: 'Jaipur',
    available: true,
    image: car_image1,
    description: 'Mahindra XUV700 is a powerful Indian SUV with smart features, ADAS tech, and muscular performance.',
    features: ['ADAS', 'Panoramic Sunroof', 'Smart Door Handles', 'Drive Modes']
  },
  {
    id: 10,
    name: 'Skoda Kodiaq',
    year: 2023,
    type: 'SUV',
    pricePerDay: '₹9000/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: '7 Seats',
    location: 'Goa',
    available: true,
    image: car_image2,
    description: 'Skoda Kodiaq is a premium 7-seater SUV with European build quality, elegance, and high-end safety.',
    features: ['Virtual Cockpit', 'Heated Seats', 'Rear Fog Lamps', 'Off-road Mode']
  }
];

export const dummyUserData = {
  id: "6847f7cab3d8daecdb517095",
  name: "GreatStack",
  email: "admin@example.com",
  role: "owner",
  image: user_profile,
}

export const MyBookingsData = [
  {
    id: 1,
    name: "BMW X5",
    car: carList[0],
    pricePerDay: "₹8200/day",
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-10T00:00:00Z",
    returnDate: "2025-06-11T00:00:00Z",
    status: "confirmed",
    price: 8200,
    createdAt: "2025-06-08T00:00:00Z",
    Location: carList[0].location
  },
  {
    id: 2,
    name: "Audi Q7",
    pricePerDay: "₹8800/day",
    car: carList[1],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-11T00:00:00Z",
    returnDate: "2025-06-12T00:00:00Z",
    status: "pending",
    price: 8800,
    createdAt: "2025-06-09T00:00:00Z",
    Location: carList[1].location
  },
  {
    id: 3,
    name: "Mercedes GLC",
    pricePerDay: "₹9600/day",
    car: carList[2],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-12T00:00:00Z",
    returnDate: "2025-06-13T00:00:00Z",
    status: "confirmed",
    price: 9600,
    createdAt: "2025-06-10T00:00:00Z",
    Location: carList[2].location
  },
  {
    id: 4,
    name: "Tesla Model 3",
    pricePerDay: "₹10200/day",
    car: carList[3],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-13T00:00:00Z",
    returnDate: "2025-06-14T00:00:00Z",
    status: "pending",
    price: 10200,
    createdAt: "2025-06-11T00:00:00Z",
    Location: carList[3].location
  },
  {
    id: 5,
    name: "Toyota Fortuner",
    pricePerDay: "₹7800/day",
    car: carList[4],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-14T00:00:00Z",
    returnDate: "2025-06-15T00:00:00Z",
    status: "confirmed",
    price: 7800,
    createdAt: "2025-06-12T00:00:00Z",
    Location: carList[4].location
  },
  {
    id: 6,
    name: "Honda Civic",
    pricePerDay: "₹6900/day",
    car: carList[5],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-15T00:00:00Z",
    returnDate: "2025-06-16T00:00:00Z",
    status: "pending",
    price: 6900,
    createdAt: "2025-06-13T00:00:00Z",
    Location: carList[5].location
  },
  {
    id: 7,
    name: "Hyundai Creta",
    pricePerDay: "₹6100/day",
    car: carList[6],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-16T00:00:00Z",
    returnDate: "2025-06-17T00:00:00Z",
    status: "confirmed",
    price: 6100,
    createdAt: "2025-06-14T00:00:00Z",
    Location: carList[6].location
  },
  {
    id: 8,
    name: "Kia Seltos",
    pricePerDay: "₹5900/day",
    car: carList[7],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-17T00:00:00Z",
    returnDate: "2025-06-18T00:00:00Z",
    status: "pending",
    price: 5900,
    createdAt: "2025-06-15T00:00:00Z",
    Location: carList[7].location
  }
];

export const ownerMenuLinks = [
  { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
  { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
  { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
  { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyDashboardData = {
  "totalCars": 4,
  "totalBookings": 2,
  "pendingBookings": 0,
  "completedBookings": 2,
  "recentBookings": [
    MyBookingsData[0],
    MyBookingsData[1]
  ],
  "monthlyRevenue": 840
}

export const assets = {
  logo,
  search_icon,
  main_car,
  pickupLocation: cityList,
  menuLinks,
  carList,
  users_icon,
  fuel_icon,
  car_icon,
  location_icon,
  banner_car_image,
  facebook: facebook_logo,
  twitter: twitter_logo,
  instagram: instagram_logo,
  check_icon,
  MyBookingsData,
  user_profile,
  dummyUserData,
  edit_icon,
  dashboardIcon,
  dashboardIconColored,
  addIcon,
  addIconColored,
  carIcon,
  carIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  eye_close_icon,
  eye_icon,
  delete_icon
};




export default assets;