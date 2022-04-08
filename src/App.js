import React from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  let [arr, setArr] = React.useState([]);



  
  React.useEffect(() => {
    let data = axios.get(
      'https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json'
    );
    data.then((data)=>{
      console.log(data);
      let data2=data.data.products;
      data2=Object.values(data2);
      console.log(data2[0]);
      data2.sort((a,b)=>{
        return ((parseInt(a.popularity)<parseInt(b.popularity))?-1:1)
      });
      setArr(data2);
    }).catch(err=>{
      console.log(err);
    })
    // console.log(data);
    // setArr([...data]);
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      {
        <h1>Qamar
          {/* {arr.map((ele)=>{
            return ele.price
          })} */}
        </h1>
      }
      <table>
        <tr>
          <td>popularity</td>
          <td>price</td>
          <td>subcategory</td>
          <td>title</td>
        </tr>
        {arr.map((ele) => {
          return(
          <tr>
            <td>{ele.popularity}</td>
            <td>{ele.price}</td>
            <td>{ele.subcategory}</td>
            <td>{ele.title}</td>
          </tr>
          );
        })}
      </table>
    </div>
  );
}
