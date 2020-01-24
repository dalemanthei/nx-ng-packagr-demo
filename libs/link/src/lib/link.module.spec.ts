import { async, TestBed } from '@angular/core/testing';
import { LinkModule } from './link.module';

describe('LinkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LinkModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LinkModule).toBeDefined();
  });
});
