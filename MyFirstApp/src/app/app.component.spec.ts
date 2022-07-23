import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { amountCheck } from './amountCheck.validators';
import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'MyFirstApp'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('MyFirstApp');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('MyFirstApp app is running!');
//   });
// });

// describe('AppComponent', () => {
    // it('it should navigate to page',() => {
    //     console.log("navigated to page");
    // })
//   });

fdescribe ('Writing our test case', () => {
    it('Principal amount with ROI and Years getting tested', () => {
        const amount = (((10000 * 5) / 100) * 5);
        expect(amount).toBe(2500);
    });
});
