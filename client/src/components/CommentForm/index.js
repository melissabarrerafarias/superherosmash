import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_COMMENTS } from '../../utils/queries';
import '../../../src/discuss.css';

const CommentForm = () => {
    const [commentBody, setBody] = useState('');

    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        update(cache, { data: { addComment } }) {

            try {
                // read what's currently in the cache
                const { comments } = cache.readQuery({ query: QUERY_COMMENTS });

                // prepend the newest thought to the front of the array 
                cache.writeQuery({
                    query: QUERY_COMMENTS,
                    data: { comments: [addComment, ...comments] }
                });
            }
            catch (e) {
                console.log(e); 
            }
        }
    });

    const onChange = event => {
        if (event.target.value.length <= 300) {
            setBody(event.target.value);
        }
    };

    const onSubmit = async event => {
        event.preventDefault();
        console.log('helli')

        try {
            await addComment({
                variables: { commentBody }
            });
            setBody('');
        }
        catch (e) {
            console.log(e)
        }
    };

    return (
        <div>
            <br/>
            <form onSubmit={onSubmit} className="ui reply form">
               <div className="field">
                   <h2>
                <textarea id="comment-textarea"
                    placeholder="Start a thread..."
                    value={commentBody}
                    onChange={onChange}
                ></textarea>
                </h2>
                </div>

                <button type="submit"> 
                    Enter
        </button>
            </form>
        </div>
    );
};

export default CommentForm;