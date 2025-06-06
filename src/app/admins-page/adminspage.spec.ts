import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminspage } from './adminspage';

describe('Adminspage', () => {
  let component: Adminspage;
  let fixture: ComponentFixture<Adminspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
