import React from 'react'
import { Col } from "react-bootstrap";
import s from "../assets/Card.module.css"

export default function Card ({ title, description, imgUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={s.projImgbx}>
        <img src={imgUrl} alt="" />
        <div className={s.projTx}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>

      </div>
    </Col>
  )
}