import { useState } from 'react'
import CategoryComponent from './CategotyComponent'
import SubCategory from './SubCategoryComponent';
import SubCategoryComponent from './SubCategoryComponent'

const Category = ({
    selected, 
    setSelected, 
    categoryData}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <CategoryComponent
                id={categoryData.id}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}//только для КАТЕГОРИЙ
                isSubCategory={false}
                hasSubCategories={!!categoryData.subCategories}
                selected={selected}
                onClick={() => {
                    console.log(!!categoryData.subCategories);
                    setSelected({
                        categoryId: categoryData.id,
                        subCategoryId: null
                    })
                }}
            >
                {categoryData.name}
            </CategoryComponent>
            {categoryData.subCategories && categoryData.subCategories.map(subCategory => (
               <SubCategoryComponent
                    key={subCategory.id}
                    categoryId={categoryData.id}
                    id={subCategory.id}
                    isExpanded={isExpanded}
                    selected={selected}
                    onClick={() => {
                        setSelected({
                            categoryId: categoryData.id,
                            subCategoryId: subCategory.id
                        })
                    }

                    }
               >
                   {subCategory.name}
               </SubCategoryComponent>
            ))}
        </>
    )
}

export default Category