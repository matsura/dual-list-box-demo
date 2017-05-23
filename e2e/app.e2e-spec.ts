import { DualListBoxTestPage } from './app.po';

describe('dual-list-box-test App', () => {
  let page: DualListBoxTestPage;

  beforeEach(() => {
    page = new DualListBoxTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
