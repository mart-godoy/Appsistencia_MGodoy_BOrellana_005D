import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getiLabel() {
    return element(by.deepCss('app-root ion-label')).getText();
  }
  getP() {
    return element(by.deepCss('app-root p')).getText();
  }
  getiButton() {
    return element(by.deepCss('app-root ion-button')).getText();
  }
  getiCardT() {
    return element(by.deepCss('app-root ion-card-title')).getText();
  }
  getiCardS() {
    return element(by.deepCss('app-root ion-card-subtitle')).getText();
  }
  
}

