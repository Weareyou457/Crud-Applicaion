import React, { useState ,useEffect} from 'react'
  import Wrapper from './Wrapper'
import {useNavigate,useLocation,useParams} from "react-router-dom"



const ProductEdit = (props) => {
  const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();
    // const location = useLocation();
    const {id} = useParams();
    console.log(id);
    


    useEffect(() => {
      fetch(`http://localhost:3005/products/${id}`)
        .then(res => res.json())
        .then(Product=>{
          setTitle(Product.title);
          setImage(Product.image);
        })
        // eslint-disable-next-line
    }, [])

    const submit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3005/products/${id}`, {
            method: 'PUT',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({ title, image })
        }).then(()=>navigate("/admin/products"));
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title" 
                defaultValue={title}
                onChange={e => setTitle(e.target.value)}
                 />
                <label>Image</label>
                <input type="text" name="image"
                defaultValue={image}
                onChange={e => setImage(e.target.value)}
                
                />
                
                <button type="submit">Save</button>
            </form>
        </Wrapper>
    )
}

export default ProductEdit
