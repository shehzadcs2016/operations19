import React from 'react';
import classnames from 'classnames';

const FlashMessage = (props) => {
    const { id, type, text } = props.message;

    const deleteMessage = () => {
        console.log('deleting message id:', id);
        props.deleteFlashMessage(id);
    }

    return (
        <div className={classnames('alert', {
            'alert-success': type === 'success',
            'alert-danger': type === 'error',
        })}>
            <button onClick={deleteMessage} className="close" style={{ cursor: 'hand' }}><span>&times;</span></button>
            {text}
        </div>
    )
}
// FlashMessage.prototype = {
//     message: React.PropTypes.object.isRequired,
//     deleteFlashMessage: React.PropTypes.func.isRequired
// }

export default FlashMessage;