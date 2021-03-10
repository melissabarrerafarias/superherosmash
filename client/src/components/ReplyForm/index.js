import React, { useState } from 'react';
import { ADD_REPLY } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

const ReplyForm = ({ commentId }) => {
    const [addReply, { error }] = useMutation(ADD_REPLY);

    const [replyBody, setBody] = useState('');

    const onChange = event => {
        if (event.target.value.length <= 300) {
            setBody(event.target.value);
        }
    };

    const onSubmit = async event => {
        event.preventDefault();

        try {
            await addReply( { variables: { replyBody, commentId } } );
            setBody('');
        } 
        catch (e) {
            console.log(e); 
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea
                    placeholder="Do you agree or disagree?"
                    value={replyBody}
                    onChange={onChange}
                ></textarea>
                <button type="submit">
                    Enter
        </button>
            </form>
        </div>
    );
};

export default ReplyForm;