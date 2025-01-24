import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    contact: "",
    email: "",
    itemName: "",
    itemDescription: "",
    quantity: "",
    justification: "",
    deliveryDueDate: new Date(),
  });

  // Handler to update form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for date change
  const handleDateChange = (date) => {
    setFormData({ ...formData, deliveryDueDate: date });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <>
      {/* Include external styles */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css"
      />

      <div className="container mt-5">
        <h2>Niyo Garage Procurement Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="secondName" className="form-label">Second Name</label>
            <input
              type="text"
              className="form-control"
              id="secondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="itemName" className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="itemDescription" className="form-label">Item Description</label>
            <textarea
              className="form-control"
              id="itemDescription"
              name="itemDescription"
              rows="3"
              value={formData.itemDescription}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="justification" className="form-label">Justification</label>
            <textarea
              className="form-control"
              id="justification"
              name="justification"
              rows="3"
              value={formData.justification}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="deliveryDueDate" className="form-label">Delivery Due Date</label>
            <DatePicker
              className="form-control"
              selected={formData.deliveryDueDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </form>
      </div>
    </>
  );
}

export default App;
