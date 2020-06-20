import Medicine from './medicine.model';

export default class Pharmacy {
  constructor(
    public id: number,
    public name: string,
    public medicines: Medicine[]
  ) {}
}
