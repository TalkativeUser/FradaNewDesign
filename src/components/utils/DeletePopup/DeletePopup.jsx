import "./DeletePopup.css"
const DeletePopup = ({title,onDelete,onClose}) => {    
  return (
    <div className="delete-container">
          <div className="delete-content">
            <h5>تأكيد الحذف</h5>
            <div className="content">
                <div>هل تريد حذف</div>
                <div className="title">{title}</div>
                <div>بالفعل ؟</div> 
            </div>
            <div className="btns">
              <button className="close" onClick={onClose}>
                إغلاق
              </button>
              <button className="save" onClick={onDelete}>تأكيد</button>
            </div>
          </div>
        </div>
  )
};
export default DeletePopup
