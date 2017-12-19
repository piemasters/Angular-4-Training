import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ShortenPipe } from './shorten.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipesComponent,
        FilterPipe,
        ReversePipe,
        SortPipe,
        ShortenPipe
      ],
      imports: [
        CommonModule,
        SharedModule,
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
