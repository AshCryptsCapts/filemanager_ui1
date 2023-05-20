import React, { useEffect, useContext } from 'react';

import './categories.css'
import { AppContext } from '../../utils/context';

const Categories = () => {
  // const [categories, setCategories] = useState([]);
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

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('https://646312614dca1a661353d0ee.mockapi.io/api/Category'); // Replace <API_ENDPOINT_URL> with your actual API endpoint
  //       const data = await response.json();
  //       setCategories(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log('Error fetching categories:', error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);


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
                  {/* <input type="checkbox" id={`label-${label.id}`} value={label.id} />
                  <label htmlFor={`label-${label.id}`}>{label.Name}</label> */}
                  <label><input type="checkbox" checked={label === selectedLabel} onChange={() => handleLabelSelection(label)} /> {label.Name}
                  </label>
                </div>
              ))}
            </div>
          )))}
      </div>

      {/* <div>
        <div>
          <h5>Category 1</h5>
          <div className='catChecks'>
            <input type="checkbox" id="lable1" value="Lable 1" checked={selectedLabel === 'Label 1'}
          onChange={handleCheckboxChange}/> 
            <input type="checkbox" id="lable1" value="Lable 1" />
            <label htmlFor="label1">Label 1</label>
            <input type="checkbox" id="lable2" name="topping" value="Lable 2" /> Lable 2
            <input type="checkbox" id="lable3" name="topping" value="Lable 3" /> Lable 3
            <input type="checkbox" id="lable4" name="topping" value="Lable 4" /> Lable 4
          </div>

        </div>
        <div>
          <h5>Category 2</h5>
          <div className='catChecks'>

            <input type="checkbox" id="lable4" name="topping" value="Lable 5" /> Lable 5
            <input type="checkbox" id="lable5" name="topping" value="Lable 6" /> Lable 6
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Categories;
