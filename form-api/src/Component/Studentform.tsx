import React, { useState } from "react";
import "./Studentform.css";

interface FormData {
  firstname: string;
  middlename: string;
  lastname: string;
  p_Firstname: string;
  p_Middlename: string;
  p_Lastname: string;
  rollNo: string;
  branch: string;
  year: string;
  semester: string;
  phone: string;
  dateOfBirth: string;
  email: string;
  address: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    middlename: "",
    lastname: "",
    p_Firstname: "",
    p_Middlename: "",
    p_Lastname: "",
    rollNo: "",
    branch: "",
    year: "",
    semester: "",
    phone: "",
    dateOfBirth: "",
    email: "",
    address: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setResponseMessage("Form submitted successfully!");
        setFormData({
          firstname: "",
          middlename: "",
          lastname: "",
          p_Firstname: "",
          p_Middlename: "",
          p_Lastname: "",
          rollNo: "",
          branch: "",
          year: "",
          semester: "",
          phone: "",
          dateOfBirth: "",
          email: "",
          address: "",
        }); // Clear form
      } else {
        setResponseMessage("Failed to submit the form.");
      }
    } catch (error) {
      setResponseMessage("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ margin: "2rem" }}>
      <h1>Student Information Form</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="content">
          <h3>Student Information :</h3>
          <div className="names">
            <div className="first-name">
              <label htmlFor="firstname">First Name:</label>
              <br />
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="middle-name">
              {" "}
              <label htmlFor="middlename">Middle Name:</label>
              <br />
              <input
                type="text"
                id="middlename"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
              />
            </div>

            <div className="last-name">
              <label htmlFor="lastname">Last Name:</label>
              <br />
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="parent">
            <h3>Parent Information :</h3>
            <div className="names">
              <div className="first-name">
                <label htmlFor="firstname">First Name:</label>
                <br />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="middle-name">
                {" "}
                <label htmlFor="middlename">Middle Name:</label>
                <br />
                <input
                  type="text"
                  id="middlename"
                  name="middlename"
                  value={formData.middlename}
                  onChange={handleChange}
                />
              </div>

              <div className="last-name">
                <label htmlFor="lastname">Last Name:</label>
                <br />
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="stud-info">
            <div className="sub-info">
              <div className="details">
                <div className="lab">
                  <label htmlFor="rollNo">Roll No:</label>
                </div>
                <input
                  type="text"
                  id="rollNo"
                  name="rollNo"
                  maxLength={2}
                  value={formData.rollNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="details">
                <div className="lab">
                  <label htmlFor="branch">Branch:</label>
                </div>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="details">
                <div className="lab">
                  <label htmlFor="year">Year:</label>
                </div>
                <input
                  type="text"
                  id="year"
                  name="year"
                  maxLength={4}
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="details">
                <div className="lab">
                  <label htmlFor="semester">Semester:</label>
                </div>
                <input
                  type="text"
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="sub-info">
              <div className="details">
                <div className="lab">
                  <label htmlFor="phone">Phone:</label>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="details">
                <div className="date">
                  <div className="lab">
                    <label htmlFor="dateOfBirth">DOB:</label>
                  </div>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="details">
                <div className="lab">
                  <label htmlFor="email">Email:</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="address">
                <div className="details">
                  <div className="add">
                    <label htmlFor="address">Address:</label>
                  </div>
                  <div className="inputs">
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="submit">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "submit"}
          </button>
        </div>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Form;
