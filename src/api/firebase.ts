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
  RegisterUserDTO,
  LoginUserDTO,
  UserAuth,
} from '@/types';

class FirebaseAuthService implements AuthApiInterface {
  auth!: Auth;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  async register(dto: RegisterUserDTO): Promise<UserAuth> {
    const { user } = await createUserWithEmailAndPassword(
      this.auth,
      dto.email,
      dto.password
    );
    return {
      id: user.uid,
      name: user.displayName,
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
      name: user.displayName,
      email: user.email,
      token: await user.getIdToken(),
    };
  }

  async logout(): Promise<void> {
    return signOut(this.auth);
  }
}

export default new FirebaseAuthService();
