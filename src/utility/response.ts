import { HttpStatus } from '@nestjs/common';
import { StatusResponse } from 'src/constants/constant';

export class Response<D> {
  status: string;
  statusCode: number;
  error: string;
  data: D;
  constructor(data: D, status?: string, statusCode?: number, error?: string) {
    this.status = status || StatusResponse.Success;
    this.statusCode = statusCode || HttpStatus.OK;
    this.error = error;
    this.data = data;
  }
}
