
import React from 'react';

const DeleteConfirmationModal = ({ onDeleteConfirm, onDeleteCancel }) => {
    return (
        <div class="modal fade" id="deleteConfirm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5>Popover in a modal</h5>
                        <p>This <a href="/" role="button" className="btn btn-secondary popover-test" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                    </div>
                    <div className="modal-actions">
                        <button onClick={onDeleteConfirm}>Delete</button>
                        <button onClick={onDeleteCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        // <div className="modal">
        //   <div className="modal-content">
        //     <h2>Confirm Deletion</h2>
        //     <p>Are you sure you want to delete the item?</p>
        //     <div className="modal-actions">
        //       <button onClick={onDeleteConfirm}>Delete</button>
        //       <button onClick={onDeleteCancel}>Cancel</button>
        //     </div>
        //   </div>
        // </div>
    );
};

export default DeleteConfirmationModal;
