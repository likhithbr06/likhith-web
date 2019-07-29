import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { KnowMoreComponent } from './know-more.component';
import {KnowmoreModule} from './knowmore-module'

describe('KnowMoreComponent', () => {
  let component: KnowMoreComponent;
  let fixture: ComponentFixture<KnowMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        KnowmoreModule
      ],
      declarations: [ KnowMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
