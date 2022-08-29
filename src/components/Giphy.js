import axios from "axios";
import React,{useEffect,useState} from "react";
import Spinner from 'react-bootstrap/Spinner';

const Giphy=()=>{
    const [data, setData]=useState([]);
    const [search,setSearch]=useState("");
    const [isLoad,setIsLoad]=useState([true]);
    useEffect(()=>{
        const fetchData=async()=>{
            const result = await axios('https://api.giphy.com/v1/stickers/trending',{
                params:{
                    api_key:'9sDOx0W9D1kzFWDT7LtaYYuidOvMgcVY'
                }
            },[]);
            setData(result.data.data);
            setTimeout(() => {
                setIsLoad(false);
            }, 4000);
        }
        fetchData();
    },[]);

    

    const renderGifs=()=>{
        return data.map(el=>{
            return(
                <>
                    <div key={el.id} className='gif'>
                        <img alt="" src={el.images.fixed_height.url}/>
                    </div>
                </>
            );
        });
    }

    const handleSearchChange = event => {
        setSearch(event.target.value);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        
        const result=await axios('https://api.giphy.com/v1/stickers/search',{
            params:{
                api_key:'9sDOx0W9D1kzFWDT7LtaYYuidOvMgcVY',
                q:search
            }
        });
        console.log(result);
        setData(result.data.data);
    }


    if (isLoad) {
        return(
        <div className="cargar">
            <Spinner animation="border" role="status" variant="light" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
      );
    } else {
        return(
            <>
                <div className="buscar">
                    <form className="row g-3">
                        <div className="col-auto"><input type="search" onChange={handleSearchChange} value={search} id='busqueda' placeholder="Buscar" className="form-control"/></div>
                        <div className="col-auto"><button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Buscar</button></div>
                    </form>
                </div>
                <div className="gifs">{renderGifs()}</div>
            </>
            );
    }
    
}

export default Giphy;