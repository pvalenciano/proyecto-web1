import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintopbarComponent } from './maintopbar.component';

describe('MaintopbarComponent', () => {
  let component: MaintopbarComponent;
  let fixture: ComponentFixture<MaintopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
