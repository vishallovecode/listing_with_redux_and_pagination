import React, { useEffect, useState, useRef } from "react";
import { Button, ButtonGroup } from "shards-react";


const Pagination = props => {
  // const [current,setCurrent] =useState(3);
  const { current, onChange, count } = props;
  // let count =101;
  let pageSize = props.size || 5;
  // let noOfPages = Math.ceil(count / pageSize);

  const divisible = count % pageSize === 0;
  const valueToBeAdded = divisible ? 0 : 1;
  let noOfPages = Math.floor(count / pageSize) + valueToBeAdded;
  const PAGINATION_WIDTH = 2; // i.e show two elements ahead and two elements behind
  const getPrevButtons = (item, PAGINATION_WIDTH) => {
    let prevButtons = [];
    let prevItem = item - 1;
    while (prevItem > 0 && PAGINATION_WIDTH > 0) {
      prevButtons.push(prevItem);
      prevItem--;
      PAGINATION_WIDTH--;
    }
    return prevButtons;
  };
  const nextButtons = (item, PAGINATION_WIDTH, noOfPages) => {
    let nextButtons = [];
    while (item < noOfPages && PAGINATION_WIDTH > 0) {
      item++;
      PAGINATION_WIDTH--;
      nextButtons.push(item);
    }
    return nextButtons;
  };
  let buttons = [
    ...getPrevButtons(current, PAGINATION_WIDTH).reverse(),
    current,
    ...nextButtons(current, PAGINATION_WIDTH, noOfPages)
  ];
  console.log(
    getPrevButtons(current, PAGINATION_WIDTH),
    current,
    nextButtons(current, PAGINATION_WIDTH, noOfPages)
  );
  return (
    <>
      <ButtonGroup>
        {current !== 1 && (
          <Button style={{ outline: "none", border: "none" }}
            theme="white"
            onClick={() => {
              onChange(1);
            }}
          >
            {"First"}
          </Button>
        )}
        {buttons.map(element => (
          (element == current) ? (<Button style={{ cursor: "auto", outline: "none", border: "none" }}
            theme={element == current ? "primary" : "white"}


          > {element}</Button>) :

            <Button
              style={{ outline: "none", border: "none" }}
              theme={element == current ? "primary" : "white"}

              onClick={() => {
                onChange(element);
              }}
            >
              {element}
            </Button>
        ))}
        {current != noOfPages && (<Button
          style={{ outline: "none", border: "none" }}
          theme="white"
          onClick={() => {
            onChange(noOfPages);
          }}
        >
          {"Last"}
        </Button>)
        }
      </ButtonGroup>
    </>
  );
};
Pagination.cname = "Pagination";
export default Pagination;
