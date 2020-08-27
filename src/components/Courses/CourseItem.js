import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalf,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';

const CourseItem = (props) => {
  const {
    title,
    img,
    current_price,
    previous_price,
    instructors_name,
    rating,
    student_rated,
    student_enrolled,
    badge,
  } = props.course;
  
  return (
    <div className='card m-3'>
      <div className='card-body'>
        <div className='row mb-4'>
          <div className='col-md-5 col-lg-3 col-xl-3'>
            <div className='mb-3 mb-md-0'>
              <img className='img-fluid w-100' src={img} alt={title} />
            </div>
          </div>
          <div className='col-md-7 col-lg-9 col-xl-9'>
            <div>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5>{title}</h5>
                  <p className='mb-3 text-muted text-uppercase small'>
                    {instructors_name}
                  </p>
                  <p className='mb-2 small'>
                    <small className='text-warning'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalf} />
                    </small>{' '}
                    <small className='text-muted'>
                      {' '}
                      {rating} ({student_rated})
                    </small>
                  </p>
                  <p className='mb-3 text-muted small'>
                    Student Enrolled: {student_enrolled}
                  </p>
                </div>
                <div>
                  <div className='mb-0'>
                    <button
                      className='btn btn-sm btn-success'
                      onClick={() => props.addToCart(props.course)}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <Badge variant='info'>{badge}</Badge>
                </div>
                <div>
                  <h5 className='mb-1'>
                    <span>
                      <strong>${current_price}</strong>
                    </span>
                    <small className='text-muted'>
                      {' '}
                      <strike>${previous_price}</strike>
                    </small>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
