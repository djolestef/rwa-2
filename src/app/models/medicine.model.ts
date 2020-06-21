export default class Medicine {
  constructor(
    public id: number,
    public name: string,
    public needsPrescription: boolean,
    public description: string
  ) {}
}
