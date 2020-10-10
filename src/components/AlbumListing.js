import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchData, getRequestOptions } from '../fetch'
import { buyCake, updateReadingListData } from '../redux'
import '../css/container.css'
import AlbumCard from './AlbumListinCard'
import Pagination from '../Pagination'
import ImageCard from './ImageCard'
import { Col, Row } from 'react-bootstrap'
import { CardFooter } from 'shards-react'
import Loader from './loader'

const AlbumListing = (props) => {
  const [albumlistingData, setalbumlistingData] = useState();
  const [pageNumber, setPageNumber] = useState(1)
  const updateInfoList = (array, page_size, page_number) => {
    let arrayvalue = array.slice((page_number - 1) * page_size, page_number * page_size);
    setalbumlistingData(arrayvalue)
  }

  const gotoUrl=(id)=>{
    props.history.push(`/images/${id}`)
  }

  const onPaginationChange = (page) => {
    setPageNumber(page);
    updateInfoList(props.mergedData, 5, page);
  };

  const mergeById = (albumData, userData) =>
    albumData.map(itm => ({
      ...userData.find((item) => (item.id === itm.userId) && item),
      ...itm
    }));
    const getData = async () => {
      const userData = await fetchData(
        `http://jsonplaceholder.typicode.com/users`,
        getRequestOptions(null, "GET")
      );
  
      if (userData) {
        const albumdata = await fetchData(
          `https://jsonplaceholder.typicode.com/albums/`,
          getRequestOptions(null, "GET")
        );
  
        if (albumdata) {
          let mergeddata = mergeById(albumdata, userData);
          setalbumlistingData(mergeddata.slice(0, 5))
          props.updateReadingListData(mergeddata)
        }
  
      }
  
    }
  useEffect(() => {
    getData()
  }, [])

  if(!props.mergedData)
  {
    return(
      <Loader/>
    )
  }

  if (props.mergedData) {
    console.log("this is the merged data", props.mergedData)
  }
 

  return (
    
    <div className="main-container">
      <h1>LIST OF ALBUMS</h1>
      {
        albumlistingData && albumlistingData.length >= 1 && albumlistingData.map((value, index) => {

          return (
            <AlbumCard data={value} gotoUrl={gotoUrl}/>
          )
        })
      }
    
      <CardFooter className="border-top">
        <Row>
          <Col className="text-center view-report">
            {
              props.mergedData && props.mergedData.length>=1 && <Pagination
              current={pageNumber}
              onChange={onPaginationChange}
              count={props.mergedData && props.mergedData.length >= 1 && props.mergedData.length}
            />
            }
          </Col>
        </Row>
      </CardFooter>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes,
    mergedData: state.mergedData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    updateReadingListData: (data) => dispatch(updateReadingListData(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumListing)
