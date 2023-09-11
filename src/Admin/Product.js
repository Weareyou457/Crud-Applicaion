import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Wrapper from './Wrapper'
import { useEffect, useState } from 'react'

const Product = () => {

  const navigate=useNavigate();
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('http://localhost:3005/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

  const del = (id) => {
      fetch(`http://localhost:3005/products/${id}`, {
          method: 'DELETE'
      });

      setProducts(products.filter(p => p.id !== id));

  }

  const edit=(id)=>{
    navigate(`/admin/products/edit/${id}`)
  }



  return (
    < Wrapper>
   <Link to='/admin/products/create' className='btn'>Add Product</Link>
      <table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p=>{
            return (
              <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td><img src={p.image} alt={p.title} width="95" /></td>

                <td>
                <button className='btn' onClick={()=>edit(p.id)}>Edit</button>
                  <button onClick={() => del(p.id)}>Delete</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </Wrapper>
  )
}

export default Product
