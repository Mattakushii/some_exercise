import styled from 'styled-components'

const SubCategoryBox = styled.div`
    width:250px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    margin-left: 20px;
    display: ${props => props.isExpanded ? 'block' : 'none'};

    :hover { 
        background-color: lightBlue;
    }
`

const SubCategory = (props) => {
    return (
        <SubCategoryBox
            isExpanded={props.isExpanded}
            onClick={() => {
                props.onClick()
            }}
        >
            {props.children}
        </SubCategoryBox>
    )
}

export default SubCategory