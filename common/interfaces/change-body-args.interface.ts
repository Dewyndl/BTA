import React from 'react';
import type { BodyType } from '../types/body.type';

export interface IChangeBodyArgs {
  value: string | boolean;
  key: string;
  setState: React.Dispatch<React.SetStateAction<BodyType>>;
}
