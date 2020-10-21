import React from 'react'

export default function ButtonWithProgress(props) {

    const {onClick,pendingApiCall,disabled,text} = props

    return (
        <button style={{textAlign:"center"}} className="btn btn-primary" onClick={onClick} disabled={disabled}>
            {pendingApiCall && <span style={{margin:"0 5px 1px 0"}} className="spinner-border spinner-border-sm"></span>}
            {text}
        </button>
    )
}
