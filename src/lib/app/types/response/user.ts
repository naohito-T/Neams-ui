import { BaseProperty } from '@/lib/app/types/base';

/** 個人のUser情報として定義したい */
interface User extends BaseProperty {
  id: number;
  name: string;
}

interface IToken {
  expired_at: string;
}

export { User, IToken };
