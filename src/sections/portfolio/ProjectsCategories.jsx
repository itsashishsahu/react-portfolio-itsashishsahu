import CategoryButton from './CategoryButton'
import { useState } from 'react';

const ProjectsCategories = ({categories, filterProjectHandler}) => {

  const [activeCategory, setActiveCategory]=useState('all');
  const changeCategoryHandler=(activeCat) => {
    setActiveCategory(activeCat);
    filterProjectHandler(activeCat);
  };

  return (
    <div className='portfolio-categories'>
        {categories.map((category)=>(
            <CategoryButton category={category} key={category} className={`btn cat-btn ${activeCategory==category?'primary':'light'}`} onChangeCategory={changeCategoryHandler}/>
        ))}
    </div>
  )
}

export default ProjectsCategories
