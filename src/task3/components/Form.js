import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'

export function Form() {

  const [form, setForm] = useState({
    sectionheader: "",
    sectiondetails: "",
  })

  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((pre) => ({ ...pre, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, form])
    setForm({
      sectionheader: "",
      sectiondetails: "",
    })
  }

  return (
    <>
      <div className='container d-flex mt-5'>
        <div>
          <form className='shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: "500px" }} onSubmit={handleSubmit}>
            <div className="section-bar mx-3">
              <div className="section-header" style={{ width: "400px" }}>
                <label>Section Header</label>
                <input className='form-control' type="text" name="sectionheader" onChange={handleChange} value={form.sectionheader} />
              </div>
              <div className="section-details" style={{ width: "400px" }}>
                <label>Section Details</label>
                <textarea className='form-control' rows="6" cols="50" name="sectiondetails" onChange={handleChange} value={form.sectiondetails} />
              </div>
            </div>
            <div className='d-flex mx-5 my-3'>
              <button className="btn btn-primary" style={{ width: "300px", height: "40px", }}>Add</button>
            </div>
          </form>
        </div>
        <div>
          {data.map((item, index) => (
            <div style={{ width: "600px", marginLeft: "40px" }}>
              <Accordion key={index} defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>{item.sectionheader}</Accordion.Header>
                  <Accordion.Body>{item.sectiondetails}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Form