import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import {ToastContainer,toast}from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import "./products.css";
const Products = () => {
  const [data, setdata] = useState([]);

  const ApiCall = async () => {
    try{
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setdata(response.data);
    toast.success("success",{position :"top-left",theme:"dark"})
  }
  catch(e){
    toast.error(e.message,{theme:light})
  }
  };
  useEffect(() => {
    ApiCall();
  }, []);

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Image", dataIndex: "image", key: "image" ,render:(i)=><img className='coloums-img'src={i}/>},
  ];

  return (
    <div className="products">
      <h1>Products</h1>
      <Table columns={columns} dataSource={data} bordered={true} />
      <ToastContainer/>
    </div>
  );
};

export default Products;
