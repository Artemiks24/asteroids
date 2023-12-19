import { store } from '../redux/store';
import { toggleAuth } from '../redux/features/posts/postsSlice';

export const handleToggleAuth = async () => {
    await store.dispatch(toggleAuth());
};