import React, { useContext, useState } from 'react'

import './filemanager.css'
// import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
// import DeleteIcon from '@mui/icons-material/Delete';
import Categories from './categories'

// import { useGlobalContext } from '../../utils/context'
import { AppContext } from '../../utils/context';
// import DeleteConfirmationModal from './deleteConfimation';


export default function Filemanager() {
  // const data = useGlobalContext;
  const { data, isLoading, error, deleteItem } = useContext(AppContext);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  //random label code 0.1
  const generateLabel = (id) => {
    const labelNumber = id % 6 + 1;
    return `Label ${labelNumber}`;
  };

  // const generateRandomLabel = () => {
  //   const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];
  //   const randomIndex = Math.floor(Math.random() * labels.length);
  //   return labels[randomIndex];
  // };
  // const filteredData = selectedLabel
  //   ? data.filter((item) => generateRandomLabel() === selectedLabel)
  //   : data;

  //basic handle delete
  // const handleDelete = (itemId) => {
  //   deleteItem(itemId);
  // };

  const handleDelete = (itemId) => {
    setShowDeleteModal(true);
    setItemToDelete(itemId);
  };

  const handleDeleteConfirm = () => {
    deleteItem(itemToDelete);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleSelectAll = () => {
    if (checkedItems.length === data.length) {
      setCheckedItems([]);
    } else {
      const allItemIds = data.map((item) => item.id);
      setCheckedItems(allItemIds);
    }
  };

  const handleCheckboxChange = (itemId) => {
    const isChecked = checkedItems.includes(itemId);

    if (isChecked) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  return (

    <div className="container allItems">
      <div className='row'>
        <div className='col-md-12'>
          <nav class="navbar" style={{ "border-bottom": 0 }}>
            <div class="container" style={{ "justify-content": "flex-end" }}>
              <form class="d-flex">
                {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                <label className="search" > <i class="fa fa-search" aria-hidden="true"></i> </label>
                <input class="form-control me-2 " type="search" placeholder="   Search by name" aria-label="Search" />
              </form>
            </div>
          </nav>
          <div className='row'>
            <div className='col-md-2'>
              <Categories />
            </div>
            <div className='col-md-9 tableAllItems'>
              <div className='tableHead'><h5>All Items</h5></div>
              
              {/* {showDeleteModal && (
        <DeleteConfirmationModal
          onDeleteConfirm={handleDeleteConfirm}
          onDeleteCancel={handleDeleteCancel}
        />
      )} */}
              <div className="modal fade" show={showDeleteModal.toString()} id="deleteConfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h5>Popover in a modal</h5>
                      <p>This <a href="/" role="button" className="btn btn-secondary popover-test" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                    </div>
                    <div className="modal-actions">
                      <button onClick={handleDeleteConfirm}>Delete</button>
                      <button data-bs-dismiss="modal" onClick={handleDeleteCancel}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th><label><input type="checkbox" checked={checkedItems.length === data.length} onChange={handleSelectAll} /></label> </th>
                    <th>NAME</th>
                    <th>OWNER</th>
                    <th>LABELS</th>
                    <th>TYPE</th>
                    <th>MODIFIED</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((items) => {
                    return (

                      <tr key={items.id}>
                        <td><label><input type="checkbox" checked={checkedItems.includes(items.id)} onChange={() => handleCheckboxChange(items.id)} /></label></td>
                        <td className='fileNameFeild'><img className='fileImg' src={items.file} alt='file' /> &nbsp;  &nbsp; {items.Name}</td>
                        <td><img className='ownerImg' src={items.Owner} alt='Owner' /></td>
                        <td><label htmlFor={`label-${items.id}`}>{generateLabel(items.id)}</label></td>
                        {/* <td>{generateRandomLabel()}</td> */}
                        <td>{items.Type}</td>
                        <td>{items.ModifietAt}</td>
                        <td><button className="btn"><i class="fa-regular fa-pen-to-square"></i></button>
                          <button className="btn" data-bs-toggle="modal" data-bs-target="#deleteConfirm" onClick={() => handleDelete(items.id)}>
                            <i className="fa fa-trash"></i>
                          </button>

                        </td>
                        
                      </tr>
                      
                    )
                  }
                  )}
                  <hr />
                </tbody>
              </table>
              {/* <div className="row row-cols-7 mainRow">
              <div className="col-md-2"><input type="checkbox" id="selectAll" name="selectAll" value="selectAll" /> </div>
              <div className="col-md-2">Name</div>
              <div className="col-md-2">Owner</div>
              <div className="col-md-2">Labels</div>
              <div className="col-md-2">Type</div>
              <div className="col-md-2">Modified</div>
              <div className="col-md-2">Action</div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}





