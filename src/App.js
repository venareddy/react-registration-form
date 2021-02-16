import { useState, useEffect } from "react";


const initialFormInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  company: ""
};

const FormComponent = ({ handleSubmit, editInput }) => {
  const [formInputs, setFormInput] = useState(initialFormInput);

  useEffect(() => {
    if (Object.keys(editInput).length !== 0) setFormInput(editInput);
  }, [editInput]);

  const handleInputChange = (e) =>
    setFormInput({
      ...formInputs,
      [e.target.name]: e.target.value
    });

  return (
    <>
      <h1>Registration Form</h1>
      
      <form>
          <label>FirstName :</label>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={formInputs.firstName}
            onChange={handleInputChange}
          />
        
        <br />
          <label>LastName :</label>
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={formInputs.lastName}
            onChange={handleInputChange}
          />
        
        <br />
          <label>Email :</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={formInputs.email}
            onChange={handleInputChange}
          />
        <br />
          <label>PhoneNumber :</label>
          <input
            type="text"
            placeholder="phone"
            name="phoneNumber"
            value={formInputs.phoneNumber}
            onChange={handleInputChange}
          />
        <br />
          <label>Company :</label>
          <input
            type="text"
            placeholder="company"
            name="company"
            value={formInputs.company}
            onChange={handleInputChange}
          />
        <br/>
        <tr>
          <button
            type="button"
            onClick={() => {
              handleSubmit({ formInput: formInputs });
              setFormInput(initialFormInput);
            }}
          >
            submit
          </button>
        </tr>
      </form>
    </>
  );
};

const TableComponent = ({ formData, handleDelete}) => {
  return (
    <>
      {formData.length !== 0 && (
        <>
          <h1>Form Data</h1>

          <table >
            <tr>
              <th>firstName</th>
              <th>lastname</th>
              <th>email</th>
              <th>phone</th>
              <th>company</th>
            </tr>
            {formData.map((v, i) => (
              <tr key={i}>
                <td>{v.firstName}</td>
                <td>{v.lastName}</td>
                <td>{v.email}</td>
                <td>{v.phoneNumber}</td>
                <td>{v.company}</td>
                
                <td>
                  <button type="button" onClick={() => handleDelete(i)}>
                   X
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
    </>
  );
};

export default function App() {
  const [formData, setFormData] = useState([]);
  const [editInput, setEditInput] = useState({});
  const handleSubmit = ({ formInput }) => {
    setFormData([...formData, formInput]);
  };

  const handleDelete = (index) => {
    const tempFormData = formData.filter((v, i) => i !== index);
    setFormData([...tempFormData]);
  };

  

  return (
    <div className="App">
      <FormComponent handleSubmit={handleSubmit} editInput={editInput} />
      <TableComponent
        formData={formData}
        handleDelete={handleDelete}
        
      />
    </div>
  );
}
