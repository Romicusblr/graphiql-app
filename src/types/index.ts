export type UserAuth = {
  id: string;
  email: string | null;
  token: string | null;
};

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserDTO = Pick<CreateUserDTO, 'email' | 'password'>;

export interface AuthApiInterface {
  createUser(user: CreateUserDTO): Promise<UserAuth>;
  login(dto: LoginUserDTO): Promise<UserAuth>;
  logout(): Promise<void>;
}
