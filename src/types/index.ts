export type UserAuth = {
  id: string;
  email: string | null;
  token: string | null;
};

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