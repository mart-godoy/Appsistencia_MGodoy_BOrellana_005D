import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('prueba 1', () => {
    page.navigateTo();
    expect(page.getiLabel()).toContain('Correo: ');
  });

  it('prueba 2', () => {
    page.navigateTo();
    expect(page.getP()).toContain('Porcentaje de asistencia ');
  });

  it('prueba 3', () => {
    page.navigateTo();
    expect(page.getiButton()).toContain('Generate QR Code');
  });

  it('prueba 4', () => {
    page.navigateTo();
    expect(page.getiCardT()).toContain('Registro Usuario');
  });

  it('prueba 5', () => {
    page.navigateTo();
    expect(page.getiCardS()).toContain('¿Qué es APPsistencia?');
  });
});
