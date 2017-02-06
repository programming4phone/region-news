import { RegionNewsPage } from './app.po';

describe('region-news App', function() {
  let page: RegionNewsPage;

  beforeEach(() => {
    page = new RegionNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
