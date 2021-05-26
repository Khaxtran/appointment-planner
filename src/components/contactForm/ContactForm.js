import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {


  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type='text' 
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Contact Name'/>
      </label>
      <br />
      <lable>
        <input 
          type='tel'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder='Contact Phone (###-###-####)'
          pattern='^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$'
          />
      </lable>
      <br />
      <label>
        <input 
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Contact Email"/> 
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
