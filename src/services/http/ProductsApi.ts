import { BaseApi } from 'services/http/BaseApi';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { Product } from 'types/Product';

class ProductsApi<T> extends BaseApi {
  private readonly resource = '/product';

  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  async find(): Promise<AxiosResponse<T[]>> {
    return await this.get(this.resource);
  }

  async findOne(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return await this.get(`${this.resource}/${config.params.id}`, config);
  }
}

const productsApi = new ProductsApi<Product>({
  baseURL: 'http://localhost:3000/api',
});

export { productsApi };
