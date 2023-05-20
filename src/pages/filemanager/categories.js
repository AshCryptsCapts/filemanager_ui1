import React, { useEffect, useContext } from 'react';

import './categories.css'
import { AppContext } from '../../utils/context';

const Categories = () => {
  const { categories, selectedLabel, setSelectedLabel, fetchCategories } = useContext(AppContext);

  useEffect(() => {
    // Fetch categories on component mount
    fetchCategories();
  }, []);

  const handleLabelSelection = (label) => {
    if (label === selectedLabel) {
      setSelectedLabel(null); // Deselect the label if it's already selected
    } else {
      setSelectedLabel(label); // Select the label
    }
  };

  return (
    <>

      {/* end heD */}
      <div className='categories'>
        <div className='catHead'>
          <h4>CATEGORIES</h4>&nbsp;&nbsp;&nbsp;&nbsp;
          <h6><i class="fa fa-cog" aria-hidden="true"></i></h6>
        </div>
        {categories.map((category) => (
          category.Labels.length > 0 && (
            <div key={category.id}>
              <h5>{category.Name}</h5>
              {category.Labels.map((label) => (
                <div key={label.id}>
                  <label><input type="checkbox" checked={label === selectedLabel} onChange={() => handleLabelSelection(label)} /> {label.Name}
                  </label>
                </div>
              ))}
            </div>
          )))}
      </div>

    </>
  )
}

export default Categories;
