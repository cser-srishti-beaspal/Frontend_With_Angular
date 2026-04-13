import { TestBed } from '@angular/core/testing';

import { Math } from './math';

describe('Math', () => {
  let service: Math;

  beforeEach(() => { // beforeEach is a Jasmine function that runs before each test in the suite
    TestBed.configureTestingModule({});
    service = TestBed.inject(Math);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    let res = service.add(2, 3);
    expect(res).toEqual(5);
  });

  it('should subtract two numbers correctly', () => {
    let res = service.sub(5, 3);
    expect(res).toEqual(2);
  });

  it('should multiply two numbers correctly', () => {
    let res = service.mul(5, 3);
    expect(res).toEqual(15);
  });

  it('should divide two numbers correctly', () => {
    let res = service.div(6, 3);
    expect(res).toEqual(2);
  });
  
});
