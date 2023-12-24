import { ReactCodeMirrorProps } from '@uiw/react-codemirror';

export type UserAuth = {
  id: string;
  name: string | null;
  email: string | null;
  token: string;
} | null;

export type RegisterUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserDTO = Pick<RegisterUserDTO, 'email' | 'password'>;

export interface AuthApiInterface {
  register(user: RegisterUserDTO): Promise<UserAuth>;
  login(dto: LoginUserDTO): Promise<UserAuth>;
  logout(): Promise<void>;
}

export type QueryEditor = {
  query: string;
  numberOfLines: number;
};

export type DropDownMenus = {
  menuToggle: boolean;
};

export interface CustomCodeMirrorProps extends ReactCodeMirrorProps {
  value: string;
  options: {
    lineNumbers: boolean;
  };
  theme: 'none' | 'light' | 'dark';
}
