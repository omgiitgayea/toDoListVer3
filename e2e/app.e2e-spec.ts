import { ToDoListVer3Page } from './app.po';

describe('to-do-list-ver3 App', function() {
  let page: ToDoListVer3Page;

  beforeEach(() => {
    page = new ToDoListVer3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
