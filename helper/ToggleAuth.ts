import { store } from '../redux/store';
import { toggleAuth } from '../redux/features/users/usersSlices';

export const handleToggleAuth = async () => {
    await store.dispatch(toggleAuth());
};