import  categories  from '../fake-categories'
import styled from 'styled-components'
import Category from './Category'

const Root = styled.div`

`

const CategoriesList = ({selected, setSelected}) => {
    return(
        <Root>
            {categories.map(category => (
                <Category 
                    key={category.id}
                    selected={selected} 
                    setSelected={setSelected}  
                    categoryData={category}
                />
            ))}
        </Root>
    )
}

export default CategoriesList