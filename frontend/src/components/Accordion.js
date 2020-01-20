import React, { useState, useRef, useEffect } from 'react'
// Creates a collapsible container, used for creating event sections and comment sections //
const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  
// props.type used to give specific 'themed' classes //
  return (
    <div className={"accordion-section "+ props.type + "-border" }>
      <button className={"accordion-top " + props.type} onClick={toogleActive}>
        <div className={"accordion-top__icon " + props.type + "-icon "}></div>
        <p className="accordion-top__title">{props.title}</p>
        <span className={active ? 'accordion-arrow rotate': 'accordion-arrow'}>
          >
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default Accordion