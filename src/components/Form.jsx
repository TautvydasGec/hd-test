import React, { useRef, useState } from 'react'

import './form.css'

const Form = ({ onSubmit }) => {
  const nameRef = useRef()
  const xRef = useRef()
  const yRef = useRef()
  const descriptionRef = useRef()
  const [disclaimer, setDisclaimer] = useState("")
  const [pic, setPic] = useState("")

  const loadFile = (e) => {
    let src = URL.createObjectURL(e.target.files[0])
    setPic(src)
  }

  const handleSubmit = () => {
    //innitially submit is set to succsseed
    setDisclaimer("")
    const data = {
      name: nameRef.current.value,
      x: xRef.current.value,
      y: yRef.current.value,
      description: descriptionRef.current.value,
      pic: pic,
    }
    if (!data.name || !data.x || !data.y || !data.description || !data.pic) {
      return setDisclaimer('Please fill out all fields')
    }
    onSubmit(data)
  }

  return (
    <div className="form">
      {/* Instead of using refs form can be implemented using Formik */}
      <label className="form-label">Name of the place</label>
      <input
        className="form-input"
        ref={nameRef}
        type="text"
        placeholder="Name"
      />

      <label className="form-label">X coordinate</label>
      <input
        className="form-input"
        ref={xRef}
        type="number"
        placeholder="0.00"
      />
      <label className="form-label">Y coordinate</label>
      <input
        className="form-input"
        ref={yRef}
        type="number"
        placeholder="0.00"
      />
      <label className="form-label">Picture</label>
      <input
        className="form-input"
        onChange={loadFile}
        type='file'
        accept="image/png, image/jpeg"
        id="imgInp"
      />
      <label className="form-label">Descripion</label>
      <textarea
        className="form-textarea"
        ref={descriptionRef}
        type="textarea"
        placeholder="Write something about this place"
      />


      <button className="form-submit" onClick={handleSubmit}>
        Submit
      </button>

      {disclaimer
        ? <div className="disclaimer">
          {disclaimer}
        </div>
        : null}

    </div>
  )
}

export default Form
