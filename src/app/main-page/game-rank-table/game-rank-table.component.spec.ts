import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRankTableComponent } from './game-rank-table.component';

describe('GameRankTableComponent', () => {
  let component: GameRankTableComponent;
  let fixture: ComponentFixture<GameRankTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRankTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRankTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
