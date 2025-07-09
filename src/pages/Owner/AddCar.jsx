import React from 'react';
import { cityList } from '../../assets/assets';


const AddCar = () => {
  const [image, setImage] = React.useState(null);
  const [car, setCar] = React.useState({
    name: '',
    year: '',
    pricePerDay: '',
    type: '',
    transmission: '',
    fuel: '',
    seats: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!image || Object.values(car).some((val) => val === "")) {
    alert("Please fill in all fields and upload a car image.");
    return;
  }

  const formData = new FormData();
  formData.append("image", image);
  formData.append("carData", JSON.stringify(car));

  try {
    const res = await fetch("http://localhost:3000/api/owner/add-car", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const data = await res.json();
    console.log("Server response:", data);

    if (data.success) {
      alert("Car listed successfully!");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error("Error adding car:", err);
    alert("Something went wrong. Try again.");
  }
};


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Add New Car</h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill in details to list a new car for booking, including pricing, availability, and car specifications.
      </p>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-4xl">
        <div className="mb-6">
          <div className="mb-6">
            <label htmlFor="carimage" className="block text-sm font-medium text-gray-700 mb-2">
              Upload a picture of your car
            </label>

            <label
              htmlFor="carimage"
              className="w-48 h-32 cursor-pointer border border-dashed border-gray-400 flex items-center justify-center rounded-md bg-gray-50 overflow-hidden"
            >
              {image ? (
                <img required
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">Click to Upload</span>
              )}
            </label>

            <input
              type="file"
              id="carimage"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={car.brand}
            onChange={handleChange}
            className="input"
          /> */}
          <input
            type="text"
            name="name"
            placeholder="Model"
            value={car.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={car.year}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="pricePerDay"
            placeholder="Daily Price (with currency)"
            value={car.pricePerDay}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="type"
            placeholder="Category"
            value={car.type}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            value={car.transmission}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="fuel"
            placeholder="Fuel Type"
            value={car.fuel}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="seats"
            placeholder="Seating Capacity"
            value={car.seats}
            onChange={handleChange}
            className="input"
          />
          <select
            name="location"
            value={car.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Location</option>
            {cityList.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

        </div>

        {/* Description */}
        <textarea
          name="description"
          rows="4"
          placeholder="Describe your car, its condition, and any notable details..."
          value={car.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-sm mb-6 resize-none focus:outline-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
        >
          ✓ List Your Car
        </button>
      </form >
    </div >
  );
};

export default AddCar;
