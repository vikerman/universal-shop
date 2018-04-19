import { DepartmentModule } from './department.module';

describe('DepartmentModule', () => {
  let departmentModule: DepartmentModule;

  beforeEach(() => {
    departmentModule = new DepartmentModule();
  });

  it('should create an instance', () => {
    expect(departmentModule).toBeTruthy();
  });
});
