import React from "react"

export default function Button({ onClick, value, deleteClass }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={deleteClass ? deleteClass : "btn service_add_btn "}
    >
      {value}
    </button>
  )
}
