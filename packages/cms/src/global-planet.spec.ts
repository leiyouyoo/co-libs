import { defineApplication, clearGlobalPlanet } from './global-planet';
import { PlanetPortalApplication } from './application/portal-application';

describe('defineApplication', () => {
    afterEach(() => {
        clearGlobalPlanet();
    });

    it('should define application success', () => {
        defineApplication('app1', (portalApp?: PlanetPortalApplication) => {
            return new Promise(() => { });
        }, { version: '1.0.0' });
        expect(window['planet'].apps['app1']).toBeTruthy();
    });

    it('should throw error when define application has exist', () => {
        defineApplication('app1', (portalApp?: PlanetPortalApplication) => {
            return new Promise(() => { });
        }, { version: '1.0.0' });
        expect(() => {
            defineApplication('app1', (portalApp?: PlanetPortalApplication) => {
                return new Promise(() => { });
            }, { version: '1.0.0' });
        }).toThrowError('app1 application has exist.');
    });
});
