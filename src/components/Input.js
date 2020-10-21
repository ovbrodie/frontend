import React from 'react'

export default function Input(props) {
    const {label,error,name,placeholder,onChange,type} = props;
    return (
        <div className="form-group">
            <label>{label}</label>
            <input className={error ? "form-control is-invalid" : "form-control" } name={name} type={type} placeholder={placeholder} onChange={onChange}/>
            <div className="invalid-feedback">{error}</div>
        </div>
    )
}
