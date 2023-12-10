import { initializeApp } from 'firebase/app';
import firebaseConfig from '@/config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  Auth,
} from 'firebase/auth';
import {
  AuthApiInterface,
  CreateUserDTO,
  LoginUserDTO,
  UserAuth,
} from '@/types';

class FirebaseAuthService implements AuthApiInterface {
  auth!: Auth;

  FirebaseAuthService() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  async createUser(dto: CreateUserDTO): Promise<UserAuth> {
    const { user } = await createUserWithEmailAndPassword(
      this.auth,
      dto.email,
      dto.password
    );
    return {
      id: user.uid,
      email: user.email,
      token: await user.getIdToken(),
    };
  }

  async login(dto: LoginUserDTO): Promise<UserAuth> {
    const { user } = await signInWithEmailAndPassword(
      this.auth,
      dto.email,
      dto.password
    );
    return {
      id: user.uid,
      email: user.email,
      token: await user.getIdToken(),
    };
  }

  async logout(): Promise<void> {
    return signOut(this.auth);
  }
}

export default new FirebaseAuthService();
