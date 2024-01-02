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

export type QueryEditor = {
  apiUrl: string;
  query: string;
  output: string;
  variable: string;
  headers: Record<string, string>;
};

export type DropDownMenus = {
  variableIsOpen: boolean;
  headersIsOpen: boolean;
};

export interface IButtonProps {
  handleClick: () => void;
}
