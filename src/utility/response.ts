import { HttpStatus } from '@nestjs/common';
import { StatusResponse } from 'src/constants/constant';

export class Response<D> {
  status: string;
  code: number;
  message: string;
  data: D;
  constructor(data: D, status?: string, code?: number, message?: string) {
    this.status = status || StatusResponse.Success;
    this.code = code || HttpStatus.OK;
    this.message = message;
    this.data = data;
  }
}
