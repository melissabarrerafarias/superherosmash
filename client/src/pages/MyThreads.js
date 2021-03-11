import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../utils/queries';

import CommentList from '../components/CommentList';

const MyThreads = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    const user = data?.user || {};
    console.log(data); 

    if (loading) {
        return <div>Please hold on as we reheat our coffee...</div>;
    }

    return (
        <div>
            <div>
                <h2>
                    {user.username}'s Threads
          </h2>
            </div>

            <div>
                <div>
                    <CommentList comments={user.comments} title={`${user.username}'s thoughts...`} />
                </div>
            </div>
        </div>
    );
};

export default MyThreads;
