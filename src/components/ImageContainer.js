import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { CardFooter } from 'shards-react';
import { fetchData, getRequestOptions } from '../fetch'
import Pagination from '../Pagination';
import { buyCake, updateReadingListData, updateImageListData } from '../redux'
import ImageCard from './ImageCard';
import Loader from './loader';

const ImageContainer = (props) => {

    const [imageListingdata, setImageListingData] = useState();
    const [pageNumber, setPageNumber] = useState(1)
    const [user_name,setuserName]=useState();
    const[albumname,setAlbumName]=useState();


    const updateInfoList = (array, page_size, page_number) => {
        let arrayvalue = array.slice((page_number - 1) * page_size, page_number * page_size);
        setImageListingData(arrayvalue)
    }

    const onPaginationChange = (page) => {
        setPageNumber(page);
        updateInfoList(props.imageData, 9, page);
    };


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const imageData = await fetchData(
            `https://jsonplaceholder.typicode.com/albums/${props.match.params.id}/photos`,
            getRequestOptions(null, "GET")
        );

        if (imageData) {
            setImageListingData(imageData.slice(0, 9));
            props.updateImageListData(imageData)
            userName()
        }

    }

    
    const userName=async()=>{
        const albumName = await fetchData(
            `https://jsonplaceholder.typicode.com/albums/${props.match.params.id}`,
            getRequestOptions(null, "GET")
        );
        if(albumName)
        {
            const userName = await fetchData(
                `https://jsonplaceholder.typicode.com/users/${albumName.userId}`,
                getRequestOptions(null, "GET")
            );
            
            setuserName(userName.username)
        setAlbumName(albumName.title)
    
        }

    }
 
    if(!props.imageData)

    {
        return (
            <Loader/>
        )
    }

    return (
        <>
        <div style={{marginTop:"60PX"}}> 
         <h2>{albumname && albumname}</h2>
           { <h6>{user_name && `Uploaded by:  ${user_name}` }</h6>}
           </div>
        <div className="d-flex1">
            
            { imageListingdata && imageListingdata.map(value => {
                return (
                    <ImageCard data={value}/>
                )
            })}
        </div>

       {  props.imageData && props.imageData.length>=1 && <CardFooter className="border-top">
        <Row>
          <Col className="text-center view-report">
            
               <Pagination
              current={pageNumber}
              onChange={onPaginationChange}
              size={9}
              count={props.imageData && props.imageData.length >= 1 && props.imageData.length}
            />
            
          </Col>
        </Row>
      </CardFooter>}
        </>
    )
}

const mapStateToProps = state => {
    return {

        imageData: state.imageData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        updateImageListData: (data) => dispatch(updateImageListData(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageContainer)
