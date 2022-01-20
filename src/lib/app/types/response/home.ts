import { BaseProperty } from '../base';

/** どちらも順番を替えたい */

interface User extends BaseProperty {
  name: string;
  email: string;
  /** これ返すのは悩み(重要なのはフロントに持ってこない) */
  activated: boolean;
  admin: boolean;
}

// type User  = BaseProperty & {
//   name: string;
//   email: string;
//   /** これ返すのは悩み(重要なのはフロントに持ってこない) */
//   activated: boolean;
//   admin: boolean;
// };

export { User };
