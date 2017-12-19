import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section15Component } from './section15.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ReactiveComponent } from './reactive/reactive.component';


describe('Section15Component', () => {
  let component: Section15Component;
  let fixture: ComponentFixture<Section15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Section15Component,
        FormsComponent,
        ReactiveComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
