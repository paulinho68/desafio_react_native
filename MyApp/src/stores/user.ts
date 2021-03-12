import { observable, action } from 'mobx';
import firebase from '@react-native-firebase/auth';

interface UserProps {
    email: string | null;
    displayName: string | null;
}

class UserStore {
    @observable user = {} as UserProps;
    @observable errors = [] as string[];

    @action async setUser(user: UserProps) {
        this.user = user;
        console.log(user);
    }

    @action async loginWithEmailAndPassword(email: string, password: string) {
        try {
            const user = await firebase()
                .signInWithEmailAndPassword(
                    email,
                    password
                );

            await this.setUser({
                email: user.user.email,
                displayName: user.user.displayName
            });

            return true;

        } catch (error) {
            console.log(error);
            this.errors = [error.message];
            return false;
        }
    }

}

export default new UserStore;