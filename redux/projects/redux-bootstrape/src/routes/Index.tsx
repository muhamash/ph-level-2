import App from '@/App';
import Task from '@/pages/Task';
import User from '@/pages/User';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter( [
    {
        path: '/',
        // element: <div>Hello world</div>,
        Component: App,
        children: [
            {
                index: true,
                // path: '/user',
                Component: User
            },
            {
                path: '/task',
                Component: Task
            }
        ]
    },
    // {
    //     path: '/user',
    //     Component: User
    // },
    // {
    //     path: '/task',
    //     Component: Task
    // }
] );

export default router