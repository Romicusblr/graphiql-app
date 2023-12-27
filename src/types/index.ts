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
  apiUrl: string;
  query: string;
  output: string;
  variable: string;
  headers: string;
};

export type DropDownMenus = {
  variableIsOpen: boolean;
  headersIsOpen: boolean;
};

export interface CustomCodeMirrorProps extends ReactCodeMirrorProps {
  value: string;
  options: {
    lineNumbers: boolean;
  };
  theme: 'none' | 'light' | 'dark';
  readOnly?: boolean;
  onChange?: (newValue: string) => void,
}
