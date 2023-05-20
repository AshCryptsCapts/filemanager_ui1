import React, { useContext, useState } from 'react'

import './filemanager.css'
import Categories from './categories'

import { AppContext } from '../../utils/context';



export default function Filemanager() {

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

  const generateLabel = (id) => {
    const labelNumber = id % 6 + 1;
    return `Label ${labelNumber}`;
  };


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

              <div className="modal fade" show={showDeleteModal.toString()} id="deleteConfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Confirm Delete?</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h5>Are you sure you want to delete</h5>
                    </div>
                    <div className="modal-actions" style={{ "display": "flex", "justify-content": " space-evenly", "align-items": "center", "padding": "15px" }}>
                      <button type="button" class="btn btn-danger" onClick={handleDeleteConfirm}>Delete</button>
                      <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleDeleteCancel}>Cancel</button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}





