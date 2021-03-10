import { observable, action } from 'mobx';

interface UserProps {
    email: string;
    displayName: string | null;
}

class UserStore {
    @observable user = {} as UserProps;

    @action async setUser(user: UserProps) {
        this.user = user;
        console.log(user);
    }

}

export default new UserStore;