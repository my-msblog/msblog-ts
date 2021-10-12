export interface UserProfileVO{
  id: number;
  username: string;
  sex: number;
  email: string;
  phone: string;
  role: string;
}
export class UserProfileVOImpl implements UserProfileVO{
  email: string;
  id: number
  phone: string
  role: string
  sex: number
  username: string;
  constructor () {
    this.email = '';
    this.id = 0;
    this.phone = '';
    this.role = '';
    this.sex = 0;
    this.username = '';
  }

}
