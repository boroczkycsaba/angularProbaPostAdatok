import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdatMegjelenitesComponent } from './post-adat-megjelenites.component';

describe('PostAdatMegjelenitesComponent', () => {
  let component: PostAdatMegjelenitesComponent;
  let fixture: ComponentFixture<PostAdatMegjelenitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdatMegjelenitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdatMegjelenitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
