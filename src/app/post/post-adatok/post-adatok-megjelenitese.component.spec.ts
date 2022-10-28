import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdatokMegjeleniteseComponent } from './post-adatok-megjelenitese.component';

describe('PostAdatokMegjeleniteseComponent', () => {
  let component: PostAdatokMegjeleniteseComponent;
  let fixture: ComponentFixture<PostAdatokMegjeleniteseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdatokMegjeleniteseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdatokMegjeleniteseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
