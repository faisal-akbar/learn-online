import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fakeData from './fakeData/fakeData';
import Heading from './components/Heading/Heading';
import CourseItem from './components/Courses/CourseItem';
import CartItem from './components/Cart/CartItem';


function App() {
  const coursesData = fakeData;
  const [courses, setCourses] = useState(coursesData);
  const [cart, setCart] = useState([]);

  // Add each item to cart
  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };

  // Subtotal
  const subTotal = cart.reduce(
    (subTotal, current) => subTotal + current.current_price,
    0
  );

  // Tax Amount
  const tax = (subTotal * 12) / 100;

  // Total Price
  const totalPrice = subTotal + tax;

  // Format the price amount
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <Heading></Heading>

      <div className='container-fluid m-2'>
        <div className='row'>
          <div className='col-lg-8 px-3'>
            {courses.map((course) => (
              <CourseItem
                key={course.id}
                course={course}
                addToCart={addToCart}
              />
            ))}
          </div>
          <div className='col-lg-4'>
            <div className='card my-3 py-3 mx-3'>
              <div className='card-body'>
                <h4 className='text-center'>{cart.length} Courses in Cart</h4>
                <ul className='list-group'>
                  {cart.map((item) => (
                    <CartItem item={item} />
                  ))}
                </ul>

                <ul className='list-group '>
                  <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-3 pb-0'>
                    Subtotal
                    <span>${formatNumber(subTotal)}</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-3 pb-0'>
                    Tax
                    <span>${formatNumber(tax)}</span>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-3 pb-2'>
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p className='mb-0'>(including Tax)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>${formatNumber(totalPrice)}</strong>
                    </span>
                  </li>
                </ul>

                <button type='button' className='btn btn-primary btn-block'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
