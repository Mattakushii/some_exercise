import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CategoryBox = styled.div`
    width:250px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    margin-left: ${props => props.isSub ? '10px' : '0' };
    ${props => {
        if(props.hasSub) {
            if(props.isExpanded) {
                return 'background-color: green';
            } else return 'background-color: transparent';
        } else {
            return props => props.selected.categoryId === props.id ? 'background-color: aqua;' : 'background-color: transparent;'
        }
        }
    }}

    :hover { 
        background-color: lightBlue;
    }
`
// categoryName, selected, id, children, isSubCategory
const Category = (props) => {

    return(
        <CategoryBox 
            id={props.id}
            selected={props.selected}
            isSub={props.isSubCategory}
            isExpanded={props.isExpanded}
            hasSub={props.hasSubCategories}
            onClick={()=> {
                props.onClick()
                if(!props.isSubCategory && props.hasSubCategories ) {
                    props.setIsExpanded(!props.isExpanded)
                } else {
                    return null
                }
            }
        }>
            {props.children}
        </CategoryBox>
    )
}

export default Category